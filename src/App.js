/* global fetch */
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import { Alert } from 'reactstrap';
import './App.css';
import questions from "./questions";
import Test from "./test";

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
        <p>
          The test below has been developed to help you identify if your symptoms match with the typical Corona Virus (COVID-19) and give you a guide to better understand if you might need to take the extra precautions of a suspect infected case.
        </p>
        <p>
          This guide is by no means replacement for your healthcare system or doctor, it has merely been developed just to help you understand better your situation as a tool for self assessment. 
        </p>
        <Alert color="danger">
          <p>
            Results of this test are just indicative and should not alarm you.
          </p>
          <p>
            In case the test marks you as positive, it’s merely a recommendation to further explore your case and contact your healthcare professionals.
          </p>
          <p>
            In case the test marks you as negative but you are still doubtful you are encouraged to seek help from your healthcare professionals.
          </p>
        </Alert>
        <p>You should answer the following questions to the best of your knowledge and understanding. </p>
        <p>There are no wrong answers, the only wrong answer is the one you don't feel right</p>

        <hr/>
        <h1>The test</h1>

        <p><strong>Section 1</strong>: let's see how your symptoms relate to the Covid-19 flu</p>

        <Test questions={questions}/>

      </header>
    </div>
  );
}

export default App;
