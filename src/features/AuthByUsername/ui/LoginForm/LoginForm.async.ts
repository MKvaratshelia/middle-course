import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';
// асинхронная подгрузка страницы
export const LoginFormAsync = lazy<FC<LoginFormProps>>(
    () => import('./LoginForm'),
);
