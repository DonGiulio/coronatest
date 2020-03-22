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
    };
  }

  render(){
    return (
      <div>
        <input id={this.props.key} type={this.props.type} onChange={this.handleChange}/> 
          <label htmlFor={this.props.key}>{this.props.answer.answer}</label>
      </div>  
    )
  }
}

Answer.propTypes = {
  key: PropTypes.number,
  answer: PropTypes.object,
  type: PropTypes.string,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func
};
export default Answer;