import i18next from 'i18next';
import zhCN from './zhCN.js';
import en from './en.js';
import { reactI18nextModule } from 'react-i18next';

i18next
    .use(reactI18nextModule)
    .init({
        interpolation: {
            // React already does escaping
            escapeValue: false,
        },
        fallbackLng: 'zh-CN',
        lng: 'zh-CN', // 'en' | 'es'
        resources: {
            'zh-CN': {
                translation: {
                    age: { label: '年龄', },
                    home: { label: '首页', },
                    name: { label: '名字', },
                    test: { label: '测试', },
                },
            },
            en: {
                translation: {
                    age: { label: 'Age', },
                    home: { label: 'Home', },
                    name: { label: 'Name', },
                },
            },
        },
    }, (err, t) => {
        if (err) {
            console.error(t);
            return console.error(err);
        }
        return '';
    });

