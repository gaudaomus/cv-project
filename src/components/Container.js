import React from "react";
import SideBar from "./SideBar.js";
import MainBar from "./MainBar";

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <SideBar />
        <MainBar />
      </div>
    );
  }
}

export default Container;
