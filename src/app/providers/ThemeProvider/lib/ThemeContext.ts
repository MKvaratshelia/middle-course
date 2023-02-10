import { createContext } from 'react';

// enum интерфейс с ограниченным колличеством значений
export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export interface ThemeContextProps {
    // вопрос значит не обязательное свойство
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
