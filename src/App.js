import "./App.css";
import { Component } from "react";
import Avocado from "./Avocado.js";
import Tomato from "./Tomato";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Avocado />
        <Tomato />
      </div>
    );
  }
}
export default App;
