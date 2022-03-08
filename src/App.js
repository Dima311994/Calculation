import Header from "./components/header/Header";
import SettingPage from "./components/setting-page/SettingPage";
import { Route, Routes } from "react-router-dom";
import Calculator from "./components/calculator/Calculator";

function App() {
  const setColor = (color) => localStorage.setItem("Color", color);
  const getColor = () => localStorage.getItem("Color");

  const setColorFont = (colorFont) => localStorage.setItem("Font", colorFont);
  const getColorFont = () => localStorage.getItem("Font");

  const handleColor = (e) => {
    setColor(e.target.value);
	setColorFont(e.target.value)
    document.body.style.backgroundColor = getColor();
	document.body.style.color = getColorFont()
  };
  document.body.style.backgroundColor = getColor();
  document.body.style.color = getColorFont();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route
          path="/setting"
          element={<SettingPage changeTheme={handleColor} />}
        />
      </Routes>
    </>
  );
}

export default App;
