/* global fetch */
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import questions from "./questions";
import categories from "./categories";
import Test from "./Test";
import Description from "./Description";
import Donate from "./Donate";

const App = () => {
  const [message, setMessage] = useState('...loading')

  useEffect(() => {
    async function fetchData () {
      try {
        let data = await (await fetch('/api')).json()
        setMessage(data.message)
      } catch (err) {
        setMessage(err.message)
      }
    }
    fetchData()
  })

  return (
    <div className="App">
      <header className="App-header container">
        <h1>COVID-19 test</h1>
        <hr/>
        <p>{message}</p>
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
