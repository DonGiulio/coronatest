import React from 'react';
import PropTypes from 'prop-types';

import ShowTest from "./ShowTest";
import Results from "./Results";
import {calculatePoints, clone} from "./calculations";

const INITIAL_STATE = {
      points: [],
      answers: [],
      showResults: false,
    };

class Test extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = INITIAL_STATE;
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.removeAnswer = this.removeAnswer.bind(this);
    this.retest = this.retest.bind(this);
  }

  handleSubmit(event) {
    const po = calculatePoints(this.props.questions, 
                               this.state.answers, 
                               this.props.categories);
    this.setState(
      {
        points: po, 
        showResults: true
      }
    )
    event.preventDefault();
  }

  addAnswer(answer, question){
    var newAnswers = clone(this.state.answers);    

    if(question.type == "radio"){
      newAnswers = newAnswers.filter( (curStateAnswer) =>
        curStateAnswer.question !== question.id
      )
    }

    const newAnswer = clone(answer);
    newAnswer.type = question.type;
    newAnswer.question = question.id;
    newAnswer.category = question.category;
    newAnswers = newAnswers.concat(newAnswer);

    this.setState( {answers: newAnswers})
  }

  removeAnswer(answer){
    this.setState({
      answers: this.state.answers.filter( (curAnswer) => 
        curAnswer.id !== answer.id)}
    );
  }

  retest(){
    this.setState(INITIAL_STATE);
  }

  render(){
    if(this.state.showResults) {
      return(<Results points={this.state.points} 
                      categories={this.props.categories}
                      retest={this.retest}
              />)
    } else {
      return(<ShowTest questions={this.props.questions}
                       handleSubmit={this.handleSubmit}
                       addAnswer={this.addAnswer}
                       removeAnswer={this.removeAnswer}
              /> )
    }
  }
}

Test.propTypes = {
  questions: PropTypes.array,
  categories: PropTypes.array
};

export default Test;
