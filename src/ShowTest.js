import React from 'react';
import PropTypes from 'prop-types';

import Question from "./Question";
import {Button, Form, FormGroup} from 'reactstrap';

class ShowTest extends React.Component {

  render(){
    return(
      <Form onSubmit={this.props.handleSubmit}>
        {
          Object.values(this.props.questions).map((question, index) => 
            <FormGroup key={index+1}>
              <Question question={question} 
                        addAnswer={this.props.addAnswer}
                        removeAnswer={this.props.removeAnswer}
                        index={index + 1}/>
              <hr/>
            </FormGroup>)
        }
        <Button color="primary" type="submit">Results</Button>
      </Form>
    )
  }
}

ShowTest.propTypes = {
  questions: PropTypes.array,
  handleSubmit: PropTypes.func,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func,
};

export default ShowTest;
