import React from 'react';
import { useTranslation } from 'react-i18next';

import questions from "./questions";
import categories from "./categories";
import DoTest from "./DoTest";
import Description from "./Description";
import Language from "./Language";

const Test = () => {
  const [t] = useTranslation();

  return (
    <div className="App">
      <header className="App-header container">
        <h1>{ t('common:main.title') }</h1>
      </header>
        <hr/>
        <Language />
        <Description />
        <hr/>
        <h1>{ t('common:main.test.title') }</h1>

        <DoTest questions={questions} categories={categories}/>
    </div>

  );
}

export default Test;
