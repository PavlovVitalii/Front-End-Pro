import "./App.css";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="conteiner">
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;
