import React, { Component } from "react";

class PropsExample extends Component {
  render() {
    //Destructure props
    const { name, business } = this.props;
    return (
      <div>
        {this.props.name} is the founder of {this.props.business}
      </div>
    );
  }
}

export default PropsExample;
