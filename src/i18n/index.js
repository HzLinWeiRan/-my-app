import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import zhCN from './zh-CN.js';
import en from './en.js';

const lng = localStorage.lang || navigator.language || 'zh-CN';
localStorage.lang = lng;

i18next
    .use(reactI18nextModule)
    .init({
        interpolation: {
            // React already does escaping
            escapeValue: false,
        },
        fallbackLng: 'zh-CN',
        lng, // 'en' | 'zh-CN'
        resources: {
            'zh-CN': zhCN,
            en
        },
    }, (err, t) => {
        if (err) {
            console.error(t);
            return console.error(err);
        }
        return '';
    });

