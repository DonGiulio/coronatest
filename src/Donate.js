import React from 'react';
import { Alert } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const Donate = () => { 
  const [t] = useTranslation();

  return(
    <Alert color="warning">
      { t('common:main.donate.text1') }
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="JSH62QG97XDUN" />
        <input type="hidden" name="currency_code" value="EUR" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_IT/i/scr/pixel.gif" width="1" height="1" />
      </form>
    </Alert>

  )}

export default Donate;