import { SettingsProvider } from "./SettingsContext";
import Header from "./Header";
import SettingsPanel from "./SettingsPanel";
import PreviewCard from "./PreviewCard";

function App() {
  return (
    <SettingsProvider>
      <div>
        <Header />
        <SettingsPanel />
        <PreviewCard />
      </div>
    </SettingsProvider>
  );
}

export default App;