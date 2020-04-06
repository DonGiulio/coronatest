import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Answer from "./Answer";

const Question = (props) => {
  const [t] = useTranslation();
  
  return(
    <div>  
      <strong>{props.index}</strong>. {t(props.question.question)}:
      {
        props.question.answers.map((answer) => 
            <Answer key={answer.id}
                    question={props.question}
                    answer={answer} 
                    addAnswer={props.addAnswer} 
                    removeAnswer={props.removeAnswer} 
            />)
      }
    </div>)
}

Question.propTypes = {
  question: PropTypes.object,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func,
  index: PropTypes.number
};

export default Question;