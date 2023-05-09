import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { NavBar } from '@/widgets/NavBar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserInited, userActions } from '@/entities/User';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);
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
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
