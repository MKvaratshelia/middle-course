import { lazy } from 'react';
// асинхронная подгрузка страницы
export const ArticleDetailsPageAsync = lazy(
    () => import('./ArticleDetailsPage'),
);
