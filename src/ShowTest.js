import React from 'react';
import PropTypes from 'prop-types';

import Question from "./Question";
import {Alert, Button, Form, FormGroup} from 'reactstrap';
import { withTranslation } from 'react-i18next';

const MissingQuestion = (({t, question, missingQuestions}) => {
  if(new Set(missingQuestions).has(question.id)){
    return <Alert color="warning">{ t('common:q.questions.required') }</Alert>
  } else {
    return(null)
  }
})

class ShowTest extends React.Component {
  render(){
    return(
      <Form onSubmit={this.props.handleSubmit}>
        {
          Object.values(this.props.questions).map((question, index) => 
            <FormGroup key={index+1}>
              <MissingQuestion t={this.props.t} 
                              question={question} 
                              missingQuestions={this.props.missingQuestions}/>
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
  t: PropTypes.func,
  questions: PropTypes.array,
  missingQuestions: PropTypes.array,
  handleSubmit: PropTypes.func,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func,
};

export default withTranslation()(ShowTest);
