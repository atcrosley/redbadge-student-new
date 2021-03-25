import React, { Component } from "react";

class StateExample extends Component {
  constructor(props) {
    //Constructor and super needed when using state
    super(props);
    this.state = { currentTemp: "78", location: "indiana" }; //initalize state
    // this.handleClick = this.handleClick.bind(this);
  }
  //   handleClick() {
  // this.setState({ currentTemp: "48" });
  //   }

  handleClick = () => {
    this.setState({ currentTemp: "25" });
  }; // dont have to use bind this way with arrow function.

  render() {
    return (
      <div>
        The current temp is {this.state.currentTemp} - in{""}
        {this.state.location}
        <button onClick={this.handleClick}>Click Me to change Temp</button>
      </div>
    );
  }
}

export default StateExample;
