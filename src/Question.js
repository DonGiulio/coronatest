import React from 'react';

import Answer from "./Answer";

const Question = (props) => {
  return(
    <p><strong>{props.index}</strong>: {props.question}
      {
        Object.values(props.answers).map((value) => 
          <Answer answer={value.answer} value={value.value}/>)
      }
    </p> )
}

export default Question;