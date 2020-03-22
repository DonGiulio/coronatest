import React from 'react';
import PropTypes from 'prop-types';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange =  this.handleChange.bind(this);
  }

  handleChange(event){
    if(event.target.checked){
      this.props.addAnswer(this.props.answer);
    } else {
      this.props.removeAnswer(this.props.answer)
    }
  }

  render(){
    return (
      <div>
        <input name={this.props.question_id} type={this.props.type} onChange={this.handleChange}/> 
          <label htmlFor={this.props.question_id}>{this.props.answer.answer}</label>
      </div>  
    )
  }
}

Answer.propTypes = {
  question_id: PropTypes.number,
  answer: PropTypes.object,
  type: PropTypes.string,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func
};
export default Answer;