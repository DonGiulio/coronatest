import React from 'react';
import { Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const Description = () => { 
  const [t] = useTranslation();

  return(<div>
           <p>{ t('common:main.description.message1') }</p>
           <p>{ t('common:main.description.message2') }</p>
           <Alert color="danger">
             <p>{ t('common:main.description.alert1') }</p>
             <p>{ t('common:main.description.alert2') }</p>
             <p>{ t('common:main.description.alert3') }</p>
           </Alert>
           <p>{ t('common:main.description.message3') }</p>
           <p>{ t('common:main.description.message4') }</p>
  </div>)}

export default Description;