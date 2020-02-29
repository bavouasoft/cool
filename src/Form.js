import React from "react";
import Input from "./Input";
import Select from "./Select";
export default class Form extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    usState: "",
    human: false
  };

  intialState = { ...this.state };

  handleInputChange = event => {
    // update state
    let value = event.target.value;
    const name = event.target.name;

    // if (event.target.type.toLowerString() === "checkbox") {
    //   value = event.target.checked;
    // }

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    debugger;
    console.log(this.state);
    this.setState({
      ...this.intialState
    });
  };

  handleSelectChange = e => {
    this.setState({
      usState: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form method="post">
          <p>
            Username:{" "}
            <Input
              value={this.state.username}
              onChange={e => this.handleInputChange(e)}
              name="username"
              type="text"
            />
          </p>
          <p>
            Password:{" "}
            <Input
              value={this.state.password}
              onChange={e => this.handleInputChange(e)}
              name="password"
              type="password"
            />
          </p>

          <p>
            Email:{" "}
            <Input
              value={this.state.email}
              onChange={e => this.handleInputChange(e)}
              name="email"
              type="email"
            />
          </p>

          <p>
            State:
            <Select
              onChange={e => this.handleSelectChange(e)}
              name="usState"
              value={this.state.usState}
              data={[
                { value: "Mass", name: "Mass" },
                { value: "Vermont", name: "Vermont" }
              ]}
            />
          </p>

          <p>
            Human?{" "}
            <Input
              checked={this.state.human}
              onChange={e => this.handleInputChange(e)}
              name="human"
              type="checkbox"
            />
          </p>

          <p>
            <button onClick={e => this.handleFormSubmit(e)} type="submit">
              Submit
            </button>
          </p>
        </form>
      </div>
    );
  }
}
