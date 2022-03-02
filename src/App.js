import Header from "./components/header/Header";
import History from "./components/history/History";
import DisplayKeypad from "./components/display-keypad/DisplayKeypad";

function App() {
  return (
    <>
      <Header />
      <div className="cont-display-key-history">
        <DisplayKeypad />
        <History />
      </div>
    </>
  );
}

export default App;
