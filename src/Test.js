import React from 'react';
import { useTranslation } from 'react-i18next';

import questions from "./questions";
import categories from "./categories";
import DoTest from "./DoTest";

const Test = () => {
  const [t] = useTranslation();

  return (
    <div className="Test">
        <h1>{ t('common:main.test.title') }</h1>
        <DoTest questions={questions} categories={categories}/>
    </div>

  );
}

export default Test;
