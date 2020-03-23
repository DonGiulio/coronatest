import React from 'react';
import PropTypes from 'prop-types';

import ShowTest from "./ShowTest";
import Results from "./Results";
import {assignCategoriesToAnswers, calculatePoints} from "./calculations";

class Test extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      questions: assignCategoriesToAnswers(this.props.questions),
      total: {},
      points: {},
      current: {},
      answers: new Set(),
      showResults: false,
    };
    

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.removeAnswer = this.removeAnswer.bind(this);
    this.retest = this.retest.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(
      {
        points: calculatePoints(this.state.questions, this.state.answers, this.props.categories), 
        showResults: true
      }
    )

    console.log(
      + " answers: "
      + this.state.answers.size
      + " mark: " 
      + this.state.points
      + "%");
  }

  addAnswer(answer){
    this.state.answers.add(answer);
  }

  removeAnswer(answer){
    this.state.answers.delete(answer);
  }

  retest(){
    this.setState({
      answers: new Set(),
      showResults: false, 
      current: 0, 
      points: 0
    })
  }

  render(){
    if(this.state.showResults) {
      return(<Results points={this.state.points} retest={this.retest}/>)
    } else {
      return(<ShowTest submit={this.handleSubmit}
                       questions={this.state.questions}
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
