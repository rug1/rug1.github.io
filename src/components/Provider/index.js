import React, { useState } from 'react';

export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

export const ThemeContext = React.createContext();

const Provider = props => {
  const [theme, setTheme] = useState(LIGHT_THEME);
  const themeToggler = () => {
    theme === LIGHT_THEME ? setTheme(DARK_THEME) : setTheme(LIGHT_THEME)
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      themeToggler: () => themeToggler()
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
};

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
);