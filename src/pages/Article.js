import React from 'react';
import { Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import ReactMarkdown from 'react-markdown';

const Article = () => { 
  const [t] = useTranslation();

  return(
    <div>
      <ReactMarkdown source={t('common:main.description.message')} />
    </div>
  )
}

export default Article;