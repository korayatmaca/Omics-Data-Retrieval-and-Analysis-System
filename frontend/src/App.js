import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) { // initialize state
    super(props);
    this.state = { apiResponse: "", dbResponse: "" };
  }
  callAPI() { // fetch data from backend 
    fetch("http://localhost:5000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }
  callDB() {
    fetch("http://localhost:5000/testDB")
        .then(res => res.text())
        .then(res => this.setState({ dbResponse: res }))
        .catch(err => err);
}

  componentWillMount() {
    this.callAPI();
    this.callDB();
  }
  render() { // render data
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-intro">{this.state.apiResponse}</p>
          <p className="App-intro">{this.state.dbResponse}</p>
        </header>
      </div>
    );
  }
}

export default App;
