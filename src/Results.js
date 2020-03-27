import React from 'react';
import PropTypes from 'prop-types';

import {Button, Alert} from 'reactstrap';

class Results extends React.Component {

  render(){
    return(
      <div>
        <h2>Results</h2>
        your marks are: 
        {
          Object.values(this.props.categories).map((category) => {
            const points = this.props.points[category.category];
            const explanation = Object.values(category.answers).filter( (answer) => 
              answer.min_points < points && points <= answer.max_points
            )[0]
            if(typeof explanation === 'undefined'){
              return(<Alert color="secondary">Non hai risposto ad abbastanza domande per formulare una risposta per la categoria {category.category}</Alert>)
            }
            return (<Alert color={explanation.color} key={category.category} >
                      <div>
                        <strong>{category.category}</strong>: 
                        {points}%
                      </div>
                      <div>
                        {explanation.title}: { explanation.descrizione }
                      </div>
        
                    </Alert>)
          })
        }
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
