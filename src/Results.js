import React from 'react';
import PropTypes from 'prop-types';

import Question from "./Question";
import {Button} from 'reactstrap';

class Results extends React.Component {

  render(){
    return(
      <div>
        <h2>Results</h2>
      </div>
    )
  }
}

Results.propTypes = {
  points: PropTypes.number
};

export default Results;
