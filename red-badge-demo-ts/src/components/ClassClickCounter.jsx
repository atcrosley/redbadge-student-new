import React, { Component } from "react";
import { render } from "react-dom";
import { Button, Container } from "reactstrap";

class ClassClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { countValue: this.props.initialValue };
  }
  handleClick = () => {
    this.setState({ countValue: this.state.countValue - 1 });
  };

  render() {
    return (
      <Container>
        <p>The total clicks left are {this.state.countValue}</p>
        <Button onClick={this.handleClick}> Click Me From Function</Button>
      </Container>
    );
  }
}
export default ClassClickCounter;
