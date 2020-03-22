import React from 'react';
import PropTypes from 'prop-types';

import ShowTest from "./ShowTest";
import Results from "./Results";

function makeTotal(questions) {
  var total = 0;
  
  Object.values(questions).map((question) => 
      total += question.points
  );
  return total;
}

function countTotalAnswers(answers){
  var total = 0;
  answers.forEach((answer) => 
    total += answer.value
  )
  return total;
}


class Test extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      total: makeTotal(props.questions),
      points: 0,
      current: 0,
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
    this.setState({current: countTotalAnswers(this.state.answers)});
    this.setState({points: (this.state.current / this.state.total).toFixed(2)*100})
    this.setState({showResults: true})
    console.log('total was: ' 
      + this.state.total 
      + " current value is : " 
      + this.state.current
      + " answers: "
      + this.state.answers.size
      + " mark: " 
      + (this.state.current / this.state.total).toFixed(2)*100
      + "%");
  }

  addAnswer(answer){
    this.state.answers.add(answer);
  }

  removeAnswer(answer){
    this.state.answers.delete(answer);
  }

  retest(){
    this.setState({"showResults": false})
  }

  render(){
    if(this.state.showResults) {
      return(<Results points={this.state.points} retest={this.retest}/>)
    } else {
      return(<ShowTest submit={this.handleSubmit}
                       questions={this.props.questions}
                       addAnswer={this.addAnswer}
                       removeAnswer={this.removeAnswer}
              /> )
    }
  }
}

Test.propTypes = {
  questions: PropTypes.array
};
export default Test;
