import Header from "./components/header/Header";
import History from "./components/history/History";
import Calculator from "./components/calculator/Calculator";

function App() {
  return (
    <>
      <Header />
      <div className="cont-display-key-history">
        <Calculator />
        <History />
      </div>
    </>
  );
}

export default App;
