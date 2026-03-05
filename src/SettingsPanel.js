import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

function SettingsPanel() {
  const { setTheme, setLanguage, resetSettings } = useContext(SettingsContext);

  return (
    <div>
      <h2>Settings</h2>

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>

      <br /><br />

      <button onClick={() => setLanguage("en")}>EN</button>
      <button onClick={() => setLanguage("th")}>TH</button>

      <br /><br />

      <button onClick={resetSettings}>Reset</button>
    </div>
  );
}

export default SettingsPanel;