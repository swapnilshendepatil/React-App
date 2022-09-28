import logo from "./images/ED-Horizontal_2-color_Logo.png";
import "./App.css";
import { Lists } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Lists />
      </header>
    </div>
  );
}

export default App;
