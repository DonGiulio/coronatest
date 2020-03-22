import React from 'react';
import PropTypes from 'prop-types';

import Question from "./Question";
import {Button} from 'reactstrap';

class ShowTest extends React.Component {

  render(){
    return(
      <form onSubmit={this.props.submit}>
        {
          Object.values(this.props.questions).map((question, index) => 
            <div key={index+1}>
              <Question question={question} 
                        addAnswer={this.props.addAnswer}
                        removeAnswer={this.props.removeAnswer}
                        index={index + 1}/>
              <hr/>
            </div>)
        }
        <Button color="primary" type="submit">Results</Button>
      </form>
    )
  }
}

ShowTest.propTypes = {
  questions: PropTypes.array,
  submit: PropTypes.func,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func,
};

export default ShowTest;
