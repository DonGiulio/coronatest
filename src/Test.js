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
      points: [],
      answers: [],
      showResults: false,
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.removeAnswer = this.removeAnswer.bind(this);
    this.retest = this.retest.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.answers, "answers");
    const po = calculatePoints(this.state.questions, 
                               this.state.answers, 
                               this.props.categories);
    console.log(po, "po");
    this.setState(
      {
        points: po, 
        showResults: true
      }
    )
    event.preventDefault();
  }

  addAnswer(answer){
    this.setState( ({ answers }) => ({
      answers: [answer].concat(answers)
    })
    )
  }

  removeAnswer(answer){
    
    this.setState( ({ answers }) => {
      const updated = [].concat(answers);
      updated.delete(answer);
      return( {
              answers: updated
            })
    })
  }

  retest(){
    this.setState({
      points: [],
      answers: new Set(),
      showResults: false
    })
  }

  render(){
    if(this.state.showResults) {
      return(<Results points={this.state.points} 
                      categories={this.props.categories}
                      retest={this.retest}
              />)
    } else {
      return(<ShowTest questions={this.state.questions}
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
