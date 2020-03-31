import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';


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
        <h1>{ t('common:main.title') }</h1>
        <hr/>
        <Language />
        <Description />
        <Privacy />
        <Donate />
        <Share />
        <hr/>
        <h1>{ t('common:main.test') }</h1>

        <Test questions={questions} categories={categories}/>
        <Donate />

      </header>
    </div>
  );
}

export default App;
