import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Img from 'react-image';
import {Navbar} from 'reactstrap';

import questions from "./questions";
import categories from "./categories";
import Test from "./Test";
import Description from "./Description";
import Privacy from "./Privacy";
import Donate from "./Donate";
import Share from "./Share";
import Language from "./Language";

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
        <Privacy />
        <Donate />
        <Share />
        <hr/>
        <h1>{ t('common:main.test.title') }</h1>

        <Test questions={questions} categories={categories}/>
        <Donate />
        <Share />


    </div>

  );
}

export default App;
