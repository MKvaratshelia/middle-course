import { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

// если в локалстораге есть значение беру от туда, если нет то беру светлую тему
// так как локалстораге всегда возвращает строку, мне нужно ее преобразовать в тип Themeс помощью оператора as
const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

console.log(defaultTheme, defaultTheme)

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  )

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
export default ThemeProvider
