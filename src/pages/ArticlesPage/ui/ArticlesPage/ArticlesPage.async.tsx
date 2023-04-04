import { lazy } from 'react';
// асинхронная подгрузка страницы
export const ArticlesPageAsync = lazy(() => import('./ArticlesPage'));
