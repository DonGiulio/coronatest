import React from 'react';
import Question from "./Question";

import {Button} from 'reactstrap';
const Test = (props) => {
  return(
    <div>
    {
      Object.values(props.questions).map((question, index) => 
                  <div>
                    <Question key={index+1} 
                              question={question["question"]} 
                              answers={question["answers"]} 
                              index={index + 1}/>
                    <hr/>
                  </div>
                              )

    }

    <Button color="primary" type="submit">Results</Button>
    </div>

    )
}

export default Test;