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

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: makeTotal(props.questions),
      current: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('total was: ' + this.state.total);
    event.preventDefault();
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
