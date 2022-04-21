import "./App.css";
import { Component } from "react";
import Avocado from "./Avocado";
import Tomato from "./Tomato";
import Paris from "./Paris";
import NYC from "./NYC";

class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      showCity: true,
    };
    console.log("CONSTRUCTOR");
  }

  render() {
    console.log("RENDER");
    const btnText = this.state.show ? "TOMATO" : "AVOCADO";
    const cityBtn = this.state.showCity ? "NEW YORK" : "PARIS";

    return (
      <div className="App">
        <p>{this.state.show ? <Avocado /> : <Tomato />}</p>
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {btnText}
        </button>
        <p>{this.state.showCity ? <Paris /> : <NYC />}</p>
        <button
          onClick={() => {
            this.setState({ showCity: !this.state.showCity });
          }}
        >
          {cityBtn}
        </button>
      </div>
    );
  }
}
export default App;
