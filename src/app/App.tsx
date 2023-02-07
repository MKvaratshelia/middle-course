import { Link } from 'react-router-dom'
import './styles/index.scss'

import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'

import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/NavBar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
  const { theme } = useTheme()

  return (
    /* итоговый класс будет class="app dark || light", 
      если app-show будет = true, класс станет class="app dark || light app-show"
    */
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App
