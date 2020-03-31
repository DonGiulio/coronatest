import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import {Button, Alert} from 'reactstrap';

const NoData = (t, category) => 
  <Alert color="secondary">
    { t('common:q.category.no_data', {category: t(category.category)}) }
  </Alert>

const Result = (t, points, category, explanation) => 
  <Alert color={explanation.color} key={t(category.category)} >
    <div>
      <h2>{t(category.category)}</h2>
    </div>
    <div>
      <h3>{t(explanation.title)}</h3> { t(explanation.description) }
    </div>
  </Alert>


const Results = (props) =>  {
  
    const [t] = useTranslation()

    return(
      <div>
        <h2>{ t('common:q.category.results') }</h2>
        {
          Object.values(props.categories).map((category) => {
            const points = props.points[category.category];
            const explanation = Object.values(category.answers).filter( (answer) => 
              answer.min_points < points && points <= answer.max_points
            )[0]
            if(typeof explanation === 'undefined'){ 
              return(NoData(t, category)) 
            } else { 
              return (Result(t, points, category, explanation)) 
            }
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
