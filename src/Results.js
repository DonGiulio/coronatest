import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'reactstrap';

class Results extends React.Component {

  render(){
    return(
      <div>
        <h2>Results</h2>
        <p>
          your mark is: {this.props.points}%
        </p>
        <p>
          <Button onClick={this.props.retest}>Redo the test</Button>
        </p>
      </div>
    )
  }
}

Results.propTypes = {
  points: PropTypes.number,
  retest: PropTypes.func
};

export default Results;
