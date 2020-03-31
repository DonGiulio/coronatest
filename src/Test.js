import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import {Alert} from 'reactstrap';

import ShowTest from "./ShowTest";
import Results from "./Results";
import {calculatePoints, clone} from "./calculations";

const INITIAL_STATE = {
      points: [],
      answers: [],
      missingQuestions: [],
      showResults: false,
    };

const MissingQuestions = (({t, questions}) => {
  if(questions.length > 0){
      return(  
        <Alert color="danger">{ t('common:q.questions.missed_questions') }</Alert>
      )
    }else{
      return(null)
    }

})

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
    event.preventDefault();
    // find missing answers
    const radioAnswers = new Set(this.state.answers.filter((answer) => 
          answer.type === "radio").map((answer) => answer.question ));
    const radioQuestions = this.props.questions.filter((question) => 
      question.type === "radio").map((question) => question.id );

    const missingQuestions = radioQuestions.filter((q) => !radioAnswers.has(q));

    if(missingQuestions.length > 0){
      this.setState({missingQuestions: missingQuestions});
      return;
    }

    const po = calculatePoints(this.props.questions, 
                               this.state.answers, 
                               this.props.categories);
    this.setState(
      {
        points: po, 
        showResults: true
      }
    )
  }

  addAnswer(answer, question){
    var newAnswers = clone(this.state.answers);    

    if(question.type === "radio"){
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
      return(
            <div>
              <p>{ this.props.t('common:main.test.text1') }</p>
              <p>{ this.props.t('common:main.test.text2') }</p>
              <ShowTest questions={this.props.questions}
                        missingQuestions={this.state.missingQuestions}
                        handleSubmit={this.handleSubmit}
                        addAnswer={this.addAnswer}
                        removeAnswer={this.removeAnswer}
              />
              <MissingQuestions t={this.props.t} 
                                questions={this.state.missingQuestions} />
            </div> )
    }
  }
}

Test.propTypes = {
  t: PropTypes.func,
  questions: PropTypes.array,
  categories: PropTypes.array
};

export default withTranslation()(Test);
