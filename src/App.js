import React from "react";
import Container from "./components/Container.js";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="title">CV Builder</div>
        <Container />
      </div>
    );
  }
}

export default App;
