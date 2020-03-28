import React from 'react';
import PropTypes from 'prop-types';
import {Label} from 'reactstrap';

import Answer from "./Answer";

const Question = (props) => {
  return(
    <div>
      <Label>
        <strong>{props.index}</strong>: {props.question.question}
        {
          Object.values(props.question.answers).map((value) => 
            <Answer key={value["id"]}
                    question={props.question}
                    answer={value} 
                    addAnswer={props.addAnswer} 
                    removeAnswer={props.removeAnswer} 
            />)
        }
      </Label>
    </div>)
}

Question.propTypes = {
  question: PropTypes.object,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func,
  index: PropTypes.number
};

export default Question;