import React from 'react';
import Question from "./Question";


const Test = (props) => {
  console.log(props.questions)
  return(
    <div>
    {
      Object.keys(props.questions).map((question, index) => 
            <Question question={question} number={index + 1}/>)
    }
    </div>
    )
}

export default Test;