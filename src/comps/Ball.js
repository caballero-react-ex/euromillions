import React, { Component } from 'react';


class Ball extends Component {
  render() {
    return (
    <div className={`Ball ${this.props.rolling && "shaking"}`}>{this.props.num}</div>
    )
  }
}

export default Ball;
