import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.editingSwitchOn = this.editingSwitchOn.bind(this);
    this.editingSwitchOff = this.editingSwitchOff.bind(this);
    this.state = {
      editClass: "hide-form",
      outputClass: "show-form",
      fullName: "",
      phoneNumber: "",
      email: "",
      github: "",
    };
  }

  editingSwitchOn(e) {
    e.preventDefault();
    this.setState({ editClass: "show-form" });
    this.setState({ outputClass: "hide-form" });
  }

  editingSwitchOff(e) {
    e.preventDefault();
    this.setState({ editClass: "hide-form" });
    this.setState({ outputClass: "show-form" });
  }

  render() {
    return (
      <div>
        <div className={`profile-container ${this.state.outputClass}`}>
          <div className="profile-header">
            <div className="profile-name">{this.state.fullName}</div>
            <div className="profile-edit" onClick={this.editingSwitchOn}>
              Edit
            </div>
          </div>
          <br />
          {this.state.phoneNumber}
          <br />
          {this.state.email}
          <br />
          {this.state.github}
        </div>
        <div className={`profile-edit-container ${this.state.editClass}`}>
          <form autoComplete="off">
            <label htmlFor="fname">Full name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              autoComplete="off"
              value={this.state.fullName}
              onChange={(e)=> {this.setState({fullName: e.target.value})}}
            />
            <label htmlFor="number">Phone number:</label>
            <input
              type="text"
              id="number"
              name="number"
              autoComplete="off"
              value={this.state.phoneNumber}
              onChange={(e)=> {this.setState({phoneNumber: e.target.value})}}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              autoComplete="off"
              value={this.state.email}
              onChange={(e)=> {this.setState({email: e.target.value})}}
            />
            <label htmlFor="github">Github:</label>
            <input
              type="text"
              id="github"
              name="github"
              autoComplete="off"
              value={this.state.github}
              onChange={(e)=> {this.setState({github: e.target.value})}}
            />
            <input
              type="submit"
              value="Submit"
              onClick={this.editingSwitchOff}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
