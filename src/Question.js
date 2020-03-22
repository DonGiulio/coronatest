import React from 'react';
import PropTypes from 'prop-types';

import Answer from "./Answer";

const Question = (props) => {
  return(
    <div>
    <p><strong>{props.index}</strong>: {props.question.question}</p>
    <div>
      {
        Object.values(props.question.answers).map((value) => 
          <Answer key={value["id"]}
                  question_id={props.question.id}
                  answer={value} 
                  type={props.question.type}
                  addAnswer={props.addAnswer} 
                  removeAnswer={props.removeAnswer} 
          />)
      }
    </div>
    </div>)
}

Question.propTypes = {
  question: PropTypes.object,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func,
  index: PropTypes.number
};

export default Question;