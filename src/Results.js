import React from 'react';
import PropTypes from 'prop-types';

import {Button} from 'reactstrap';

class Results extends React.Component {

  render(){
    return(
      <div>
        <h2>Results</h2>

          your marks are: 
          <ul>
          {
            Object.values(this.props.categories).map((category) => 
              <li key={category.category} ><strong>{category.category}</strong>: {this.props.points[category.category]}%</li>
            )
          }
          </ul>
        <p>
          <Button onClick={this.props.retest}>Redo the test</Button>
        </p>
      </div>
    )
  }
}

Results.propTypes = {
  points: PropTypes.array,
  categories: PropTypes.array,
  retest: PropTypes.func
};

export default Results;
