import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {Button, Alert} from 'reactstrap';

const Results = (props) =>  {
  
    const [t, i18n] = useTranslation()

    return(
      <div>
        <h2>Results</h2>
        your marks are: 
        {
          Object.values(props.categories).map((category) => {
            const points = props.points[category.category];
            const explanation = Object.values(category.answers).filter( (answer) => 
              answer.min_points < points && points <= answer.max_points
            )[0]
            if(typeof explanation === 'undefined'){
              return(
                <Alert color="secondary">
                  Non hai risposto ad abbastanza domande per formulare 
                  una risposta per la categoria {category.category}
                </Alert>)
            }
            return (<Alert color={explanation.color} key={t(category.category)} >
                      <div>
                        <strong>{t(category.category)}</strong>: 
                        {points}%
                      </div>
                      <div>
                        {t(explanation.title)}: { t(explanation.descrizione) }
                      </div>
        
                    </Alert>)
          })
        }
        <p>
          <Button onClick={props.retest}>Redo the test</Button>
        </p>
      </div>)
}

Results.propTypes = {
  points: PropTypes.array,
  categories: PropTypes.array,
  retest: PropTypes.func
};

export default Results;
