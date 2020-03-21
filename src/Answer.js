import React from 'react';

const Answer = (props) => {
    console.log("Answer: ", props);

  return (
    <p><input type="radio"/> {props.answer}</p>  
    )
}

export default Answer;