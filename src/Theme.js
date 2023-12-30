import React, { useEffect, createContext, useState } from "react";

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as dark-theme
    localStorage.setItem("theme", "dark-theme");
    return "dark-theme";
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
      if(theme==="dark-theme"){
      document.documentElement.style.setProperty('--primary-color', 'green');
    
      document.documentElement.style.setProperty('--secondary-color', '#F4CE14');
      document.documentElement.style.setProperty('--terciary-color', '#ee9972');
      document.documentElement.style.setProperty('--higlight-color', '#edefee');
      document.documentElement.style.setProperty('--black-color', '#333');
       } else {
      
    document.documentElement.style.setProperty('--primary-color', '#495E57');
    document.documentElement.style.setProperty('--secondary-color', '#F4CE14');
    document.documentElement.style.setProperty('--terciary-color', '#ffffff');
    document.documentElement.style.setProperty('--higlight-color', '#edefee');
    document.documentElement.style.setProperty('--black-color', '#333');
    }
  };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };