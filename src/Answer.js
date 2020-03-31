import React from 'react';
import PropTypes from 'prop-types';
import {Label} from 'reactstrap';
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
        <Label>
          <input name={this.props.question.id}
                 type={this.props.question.type}
                 onChange={this.handleChange}/>
              &nbsp;{t(this.props.answer.answer)}
        </Label>
      </div>  
    )
  }
}

Answer.propTypes = {
  t: PropTypes.func,
  question: PropTypes.object,
  answer: PropTypes.object,
  type: PropTypes.string,
  addAnswer: PropTypes.func,
  removeAnswer: PropTypes.func
};
export default withTranslation()(Answer);