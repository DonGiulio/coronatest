import React from 'react';
import { Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';
import Email from 'react-sharingbuttons/dist/buttons/Email';
import Reddit from 'react-sharingbuttons/dist/buttons/Reddit';

const Share = () => { 
  const [t] = useTranslation();

  const url = "https://covid19.rorobea.com/"
  return(
    <Alert color="success">
      <ReactMarkdown source={t('common:main.share.text')} />
      <Email url={url} 
             subject={ t('common:main.share.email.subject') } 
             />
      <Facebook url={url} />
      <Twitter url={url} shareText={ t('common:main.share.twitter.shareText') } />
      <Reddit url={url} />
    </Alert>

  )}

export default Share;