import React from 'react';
import { useTranslation } from 'react-i18next';

import ReactMarkdown from 'react-markdown';

const Precauzioni = () => { 
  const [t] = useTranslation();

  return(
    <div>
      <h1><ReactMarkdown source={ t('common:pages.precautions.title') } /></h1>
      <ReactMarkdown source={ t('common:pages.precautions.text') } />
    </div>
  )
}

export default Precauzioni;