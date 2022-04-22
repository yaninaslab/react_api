import "./App.css";
import { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    person: null,
  };
  // async componentDidMount() {
  //   const url = "https://api.quotable.io/random";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ content: data.content, author: data.author });
  // }
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0] });
    console.log(data.results[0]);
  }

  render() {
    return (
      <div className="App">
        {!this.state.person ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>First Name: {this.state.person.name.first}</p>
            <p>Last Name: {this.state.person.name.last}</p>
            <p>Email: {this.state.person.email}</p>
            <p>Age: {this.state.person.dob.age}</p>
            <img
              src={this.state.person.picture.thumbnail}
              alt="avatar"
              width="100px"
            />
          </div>
        )}
      </div>
    );
  }
}
export default App;
