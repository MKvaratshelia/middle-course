import { createContext } from 'react';

// enum интерфейс с ограниченным колличеством значений
export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme',
}

export interface ThemeContextProps {
    // вопрос значит не обязательное свойство
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
export const LOCAL_STORAGE_THEME_KEY = 'theme';
