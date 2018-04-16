import React from 'react';
import { I18n } from 'react-i18next';
import styles from './home.scss';

// import ReactDom from 'react-dom';

// console.log(styles);
export default function App() {
    // const t2 = '123';
    return (<I18n>
        {(t, { i18n }) => (<div className={styles.test}>
            {t('home.label')} 222
            {t('test.label')}
            <button onClick={() => { i18n.changeLanguage('en'); }}>111</button>
        </div>)}
    </I18n>);
}
