import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.editingSwitchOn = this.editingSwitchOn.bind(this);
    this.editingSwitchOff = this.editingSwitchOff.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.delete = this.delete.bind(this);
    this.state = {
      position: "",
      year: "",
      description: "",
      editClass: "hide-form",
      outputClass: "show-form",
      experiences: [],
    };
  }

  addExperience(e) {
    e.preventDefault();
    const tempExpObj = {
      key: 1+Math.random(),
      position: this.state.position,
      year: this.state.year,
      description: this.state.description,
    };
    const tempExpList = [...this.state.experiences];
    this.setState({
      experiences: tempExpList.concat(tempExpObj),
      position: "",
      year: "",
      description: "",
    });
  }

  delete(key){
    const tempExpList = [...this.state.experiences];
    this.setState({
      experiences: tempExpList.filter((item)=>item.key !== key)
    })
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
    const { position, year, description, editClass, outputClass } = this.state;
    return (
      <div>
        <div className={`experience-edit-container ${editClass}`}>
          <form>
            <label htmlFor="experience-title">Title:</label>
            <input
              type="text"
              name="experience-title"
              id="experience-title"
              autoComplete="off"
              value={position}
              onChange={(e) => this.setState({ position: e.target.value })}
            />
            <label htmlFor="experience-year">Years:</label>
            <input
              type="text"
              name="experience-year"
              id="experience-year"
              autoComplete="off"
              value={year}
              onChange={(e) => this.setState({ year: e.target.value })}
            />
            <label htmlFor="experience-title">Description:</label>
            <input
              type="text"
              name="experience-description"
              id="experience-description"
              autoComplete="off"
              value={description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
            <input
              type="submit"
              value="Add Experience"
              onClick={this.addExperience}
            />
            <input
              type="submit"
              value="Submit"
              onClick={this.editingSwitchOff}
            />
          </form>
          {this.state.experiences.map((item) => (
            <>
              <div className="experience-details">
                <div className="experience-position">{item.position}</div>
                <div className="experience-year">{item.year}</div>
                <div className="experience-description">{item.description}</div>
              </div>
              <button onClick={()=>this.delete(item.key)}>x</button>
            </>
          ))}
        </div>
        <div
          className={`experience-container ${outputClass}`}
          style={{ borderWidth: this.props.top ? "0px" : "2px" }}
        >
          <div className="experience-header">
            <div className="experience-title">{this.props.title}</div>
            <div className="experience-edit" onClick={this.editingSwitchOn}>
              Edit
            </div>
          </div>
          {this.state.experiences.map((item) => (
            <>
              <div className="experience-details">
                <div className="experience-position">{item.position}</div>
                <div className="experience-year">{item.year}</div>
                <div className="experience-description">{item.description}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
