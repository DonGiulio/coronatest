import React from 'react';
import { Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'

const Share = () => { 
  const [t] = useTranslation();

  const url = "https://covid19.rorobea.com/"
  return(
    <Alert color="warning">
      { t('common:main.share.text1') }
      <Facebook url={url} />
      
      <Twitter url={url} shareText={ t('common:main.share.twitter.text') } />

    </Alert>

  )}

export default Share;