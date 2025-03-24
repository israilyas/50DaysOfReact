import { createContext, useState, useEffect } from "react";

// Exported context component
//This creates a ThemeContext, which will be used to share the theme state across components without prop drilling.
export const ThemeContext = createContext()

// export theme provider
export const ThemeProvider=({children})=>{

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
      );

      const toggleTheme = ()=>{
        const newTheme = theme === "light"? "dark":"light";
        setTheme(newTheme);
        localStorage.setItem("theme",newTheme)
      }

      useEffect(() => {
        document.body.className = theme;
      }, [theme]);
      

    return(
        <ThemeContext.Provider value={{theme,toggleTheme,}}>
            {children}
        </ThemeContext.Provider>
    )

}