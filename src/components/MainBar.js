import React from "react";
import Experience from "./Experience.js";

class MainBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-bar">
        <Experience top={true} title="Education" />
        <Experience title="Work" />
        <Experience title="Project" />
      </div>
    );
  }
}

export default MainBar;
