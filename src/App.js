import React from 'react';
import PropTypes from 'prop-types';

import './App.css';
import {Navbar} from 'reactstrap';
import { withTranslation } from 'react-i18next';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Test from "./Test";
import Privacy from "./Privacy";
import Donate from "./Donate";
import Share from "./Share";
import Language from "./Language";
import Article from './pages/Article';

class App extends React.Component {
  componentDidMount(){
    console.log("component did mount");
    async function fetchData () {
      try {
        const response = await fetch('/access', {method: 'PUT' });
        console.log("response received");
        console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData()
    console.log("componend finished didmounting")
  }

  render(){
    return (

    <div className="App container">
      <Router>
        <Navbar color="light" light expand="md">
          <nav>
            <Link to="/" className="navbar-brand" >
              <h1>
                <img src="/logo.png" width="50px" height="50px" className="d-inline-block align-top" alt="Logo" />
                { this.props.t('common:main.title') }
              </h1>
            </Link>
            <Link to="/" className="nav-item" >Test</Link>
          </nav>
        </Navbar>
        <Language className="float-right"/>
        <hr/>        
        <Privacy />
        <Donate />
        <Share />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/article">
            <Article />
          </Route>
          <Route path="/">
            <Test />
          </Route>
        </Switch>
      </Router>
      <Donate />
      <Share />
    </div>

    )
  }
}

Test.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(App);
