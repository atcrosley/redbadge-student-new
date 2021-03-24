import React, { Component } from "react";
import { Alert, Container } from "reactstrap";

class ClassComponentProps extends Component {
  render() {
    const { numbers } = this.props;
    const displayAlerts = () =>
      numbers.map((num, index) => (
        <Alert key={index} color={num % 2 === 0 ? "success" : "danger"}>
          The number is {num}{" "}
        </Alert>
      ));
    return (
      <Container>
        <h3>From the Function Component</h3>
        {displayAlerts()}
      </Container>
    );
  }
}
export default ClassComponentProps;
