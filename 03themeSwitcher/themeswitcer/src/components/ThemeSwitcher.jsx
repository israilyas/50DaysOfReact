import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className={`toggle ${ theme === 'dark'? 'text-white':'text-[#030712]  border-1 border-[#030712]' }`}
      />
      <span className={`ml-2 text-sm font-medium dark:text-white text-black ${ theme === 'dark'? 'text-white':'text-[#030712]' }`}>
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </span>
    </label>
  );
};

export default ThemeSwitcher;
