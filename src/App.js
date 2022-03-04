import Header from "./components/header/Header";
import SettingPage from "./components/setting-page/SettingPage";
import { Route, Routes } from "react-router-dom";
import Calculator from "./components/calculator/Calculator";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </>
  );
}

export default App;
