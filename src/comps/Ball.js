import React, { Component } from 'react';
import './_Ball.scss';


class Ball extends Component {
  render() {
    return (
    <div className="Ball">{this.props.num}</div>
    )
  }
}

export default Ball;