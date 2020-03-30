import React from 'react';
import { Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const Description = () => { 
  const [t] = useTranslation();

  return(<div>
           <Alert >
             <p>{ t('common:main.privacy.notice1') }</p>
           </Alert>
  </div>)}

export default Description;