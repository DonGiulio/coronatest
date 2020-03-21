import React from 'react';
import Question from "./Question";


const Test = (props) => {
  return(
    <div>
    {
      Object.values(props.questions).map((question, index) => 
                  <Question question={question["question"]} 
                            answers={question["answers"]} 
                            index={index + 1}/>)
    }
    </div>
    )
}

export default Test;