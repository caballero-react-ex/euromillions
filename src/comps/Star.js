import React, { Component } from 'react';
import './_Star.scss';

class Star extends Component {
  render() {
    return (
    <div className="Star Ball">{this.props.num}</div>
    )
  }
}

export default Star;