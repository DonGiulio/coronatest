import React from 'react';
import { Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

const Description = () => { 
  const [t] = useTranslation();

  return(<div>
           <ReactMarkdown source={t('common:main.description.message')} />
           <Alert color="danger">
             <ReactMarkdown source={ t('common:main.description.alert') } />
           </Alert>
  </div>)}

export default Description;