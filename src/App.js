import React from 'react';
import './App.css';
import questions from "./questions";
import categories from "./categories";
import Test from "./Test";
import Description from "./Description";
import Donate from "./Donate";

const App = () => {
  return (
    <div className="App">
      <header className="App-header container">
        <h1>COVID-19 test</h1>
        <hr/>
        <Description />
        <Donate />
        <hr/>
        <h1>The test</h1>

        <Test questions={questions} categories={categories}/>
        <Donate />

      </header>
    </div>
  );
}

export default App;
