import React from 'react';
import { useTranslation } from 'react-i18next';


const Language = () => {

    const { i18n } = useTranslation();
    return (
      <div className="float-right">
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
        <button onClick={() => i18n.changeLanguage('it')}>Italiano</button>
      </div>
    )
}

export default Language;