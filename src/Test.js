import React from 'react';
import PropTypes from 'prop-types';

import ShowTest from "./ShowTest";
import Results from "./Results";
import {assignCategoriesToAnswers, calculatePoints} from "./calculations";

class Test extends React.Component {
  constructor(props) {
    super(props);
    
    assignCategoriesToAnswers(this.props.questions)
    this.state = {
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
        points: calculatePoints(this.props.questions, this.state.answers, this.props.categories), 
        showResults: true
      }
    )
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
      return(<Results points={this.state.points} 
                      categories={this.props.categories}
                      retest={this.retest}/>)
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
