import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Img from 'react-image'


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
    <div className="App">
      <header className="App-header container">
        <Img src="/logo.webp" className="float-left" width="1em"/>
        <h1>{ t('common:main.title') }</h1>
        <hr/>
        <Language />
        <Description />
        <Privacy />
        <Donate />
        <Share />
        <hr/>
        <h1>{ t('common:main.test.title') }</h1>

        <Test questions={questions} categories={categories}/>
        <Donate />
        <Share />

      </header>
    </div>

  );
}

export default App;
