import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch } from 'react-redux';
import { NavBar } from 'widgets/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        /* итоговый класс будет class="app dark || light",
      если app-show будет = true, класс станет class="app dark || light app-show"
    */
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <NavBar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
