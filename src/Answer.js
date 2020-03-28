import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange =  this.handleChange.bind(this);
  }

  handleChange(event){
    if(event.target.checked){
      this.props.addAnswer(this.props.answer, this.props.question);
    } else {
      this.props.removeAnswer(this.props.answer)
    }
  }

  render(){
    const {t} = this.props;

    return (
      <div>
        <input name={this.props.question.id}
               type={this.props.question.type}
               onChange={this.handleChange}/>
          <label htmlFor={this.props.question.id}>
            {t(this.props.answer.answer)}
          </label>
      </div>  
    )
  }
}

Answer.propTypes = {
  question: PropTypes.object,
  answer: PropTypes.object,
  type: PropTypes.string,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func
};
export default withTranslation()(Answer);