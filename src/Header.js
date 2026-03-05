import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

function Header() {
  const { language } = useContext(SettingsContext);

  return (
    <h1>
      {language === "en" ? "Welcome" : "ยินดีต้อนรับ"}
    </h1>
  );
}

export default Header;