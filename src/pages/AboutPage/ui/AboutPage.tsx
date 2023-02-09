import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    // передаю названия файла с переводами по умолчанию translation
    const { t } = useTranslation('about');
    return <div>{t('О сайте')}</div>;
};

export default AboutPage;
