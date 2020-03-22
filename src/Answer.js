import React from 'react';
import inspect from "./inspect";


class Answer extends React.Component {
  constructor (props) {
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
        <input type="checkbox" onChange={this.handleChange}/> {this.props.answer}
      </div>  
    )
  }
}
export default Answer;