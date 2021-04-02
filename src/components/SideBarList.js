import React from "react";

class SideBarList extends React.Component {
  constructor(props) {
    super(props);
    this.addSkill = this.addSkill.bind(this);
    this.editingSwitchOn = this.editingSwitchOn.bind(this);
    this.editingSwitchOff = this.editingSwitchOff.bind(this);
    this.delete = this.delete.bind(this);
    this.state = {
      editClass: "hide-form",
      outputClass: "show-form",
      skillsList: [],
      skill: "",
    };
  }

  delete(key) {
    const tempList = [...this.state.skillsList];
    this.setState({
      skillsList: tempList.filter(item => item.key !== key),
    });
  }

  addSkill(e) {
    e.preventDefault();
    const tempList = [...this.state.skillsList];
    const tempSkillObj = { key: 1 + Math.random(), value: this.skillBox.value };
    this.setState({
      skillsList: tempList.concat(tempSkillObj),
      skill: "",
    });
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
        <div className={`side-bar-edit-container ${this.state.editClass}`}>
          <form>
            <label htmlFor="skill">Add {this.props.title}</label>
            <input
              type="text"
              id="skill"
              name="skill"
              autoComplete="off"
              value={this.state.skill}
              onChange={(e) => this.setState({ skill: e.target.value })}
              ref={(e) => (this.skillBox = e)}
            />
            <input type="submit" value="Add" onClick={this.addSkill} />
            <input
              type="submit"
              value="Submit"
              onClick={this.editingSwitchOff}
            />
          </form>
          {this.state.skillsList.map((item) => (
            <>
              <li key={item.key} className="side-bar-list-item">
                {item.value}
              </li>
              <button onClick={() => this.delete(item.key)}>x</button>
            </>
          ))}
        </div>
        <div className={`side-bar-container ${this.state.outputClass}`}>
          <div className="side-bar-header">
            <div className="side-bar-list-title">{this.props.title}</div>
            <div className="side-bar-edit" onClick={this.editingSwitchOn}>
              Edit
            </div>
          </div>
          <br />
          {this.state.skillsList.map((item) => (
            <li
              key={this.state.skillsList.indexOf(item)}
              className="side-bar-list-item"
            >
              {item.value}
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default SideBarList;
