import React from "react";
import SideBarList from "./SideBarList";
import Profile from "./Profile.js";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="side-bar">
        <Profile />
        <SideBarList title="Skills" />
        <SideBarList title="Hobbies" />
      </div>
    );
  }
}

export default SideBar;
