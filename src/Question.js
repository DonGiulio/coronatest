import React from 'react';

import Answer from "./Answer";

const Question = (props) => {
  return(
    <div>
    <p><strong>{props.index}</strong>: {props.question}</p>
    <div>
      {
        Object.values(props.answers).map((value, index) => 
          <Answer key={index} answer={value.answer} value={value.value}/>)
      }
    </div>
    </div>)
}

export default Question;