import React from 'react';
import Question from "./Question";

import {Button} from 'reactstrap';

function makeTotal(questions) {
  var total = 0;
  
  Object.values(questions).map((question) => 
    Object.values(question.answers).map((answer) => {
      return total += answer.value }
    )
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
      current: 0,
      answers: new Set()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.removeAnswer = this.removeAnswer.bind(this);
  }

  handleSubmit(event) {
    this.state.current = countTotalAnswers(this.state.answers);
    console.log('total was: ' 
      + this.state.total 
      + " current value is : " 
      + this.state.current
      + " answers: "
      + this.state.answers.size
      + " mark: " 
      + (this.state.current / this.state.total).toFixed(2)*100
      + "%");
    event.preventDefault();
    
  }

  addAnswer(answer){
    this.state.answers.add(answer);
  }

  removeAnswer(answer){
    this.state.answers.delete(answer);
  }

  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        {
          Object.values(this.props.questions).map((question, index) => 
            <div key={index+1}>
              <Question question={question["question"]} 
                        answers={question["answers"]} 
                        addAnswer={this.addAnswer}
                        removeAnswer={this.removeAnswer}
                        index={index + 1}/>
              <hr/>
            </div>)
        }
        <Button color="primary" type="submit">Results</Button>
        </form>
      </div>
    )
  }
}

export default Test;
