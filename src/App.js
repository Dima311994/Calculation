import Header from "./components/header/Header";
import SettingPage from "./components/setting-page/SettingPage";
import ControlPanel from "./components/control-panel/ControlPanel";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ControlPanel />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </>
  );
}

export default App;
