import { useCallback, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    DinamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const initialReducers: ReducersList = {
        loginForm: loginReducer,
    };
    const onChangeUserName = useCallback(
        (value: string) => {
            dispatch(loginActions.setUserName(value));
        },
        [dispatch],
    );
    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );
    const onLoginClick = useCallback(() => {
        dispatch(loginByUserName({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DinamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && (
                    <Text
                        text={t('Вы ввели неверный логин или пароль')}
                        theme={TextTheme.ERROR}
                    />
                )}
                <Input
                    onChange={onChangeUserName}
                    autoFocus
                    type='text'
                    className={cls.input}
                    placeholder={t('Введите username')}
                    value={username}
                />
                <Input
                    onChange={onChangePassword}
                    type='text'
                    className={cls.input}
                    placeholder={t('Введите пароль')}
                    value={password}
                />
                <Button
                    onClick={onLoginClick}
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DinamicModuleLoader>
    );
});

export default LoginForm;
