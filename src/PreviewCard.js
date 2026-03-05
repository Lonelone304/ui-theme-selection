import { useContext } from "react";
import { SettingsContext } from "./SettingsContext";

function PreviewCard() {
  const { theme, language } = useContext(SettingsContext);

  return (
    <div>
      <p>Theme: {theme}</p>
      <p>Language: {language}</p>

      <p>
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </p>
    </div>
  );
}

export default PreviewCard;