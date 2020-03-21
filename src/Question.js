import React from 'react';

const Question = (props) => {
  return(
    <p><strong>{props.number}</strong>: Condizioni generali          
      <p><input type="radio"/> mi sento stanco, spossato</p>  
      <p><input type="radio"/> respiro a fatica</p>  
      <p><input type="radio"/> mi sento bene</p>  
    </p> )
}

export default Question;