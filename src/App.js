import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import {Navbar} from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Description from "./Description";
import Test from "./Test";
import Privacy from "./Privacy";
import Donate from "./Donate";
import Share from "./Share";
import Language from "./Language";
import Article from './pages/Article';

const App = () => {
  const [t] = useTranslation();

  return (
    <div className="App container">
        <Navbar color="light" light expand="md">
          <a className="navbar-brand" href="https://covid19.rorobea.com/">
          <h1>
            <img src="/logo.png" width="50px" height="50px" className="d-inline-block align-top" alt="Logo" />
            { t('common:main.title') }
          </h1>
          </a>
        </Navbar>
          <Language className="float-right"/>
        <hr/>        
        <Description />
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Test</Link>
            </li>
            <li>
              <Link to="/article">Article</Link>
            </li>
          </ul>
        </nav>
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
      </div>
    </Router>

        <Donate />
        <Share />


    </div>

  );
}

export default App;
