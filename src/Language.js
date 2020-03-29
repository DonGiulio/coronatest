import React from 'react';
import { useTranslation } from 'react-i18next';


const Language = () => {

    const { i18n } = useTranslation();
    return (
      <div>
        <button onClick={() => i18n.changeLanguage('it')}>it</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
      </div>
    )
}

export default Language;