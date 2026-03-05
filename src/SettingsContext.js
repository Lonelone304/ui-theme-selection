import { createContext, useState, useEffect } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("app-settings");
    if (saved) {
      const data = JSON.parse(saved);
      setTheme(data.theme);
      setLanguage(data.language);
    }
  }, []);

  useEffect(() => {
    const data = { theme, language };
    localStorage.setItem("app-settings", JSON.stringify(data));
  }, [theme, language]);

  const resetSettings = () => {
    setTheme("light");
    setLanguage("en");
  };

  return (
    <SettingsContext.Provider value={{ theme, language, setTheme, setLanguage, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};