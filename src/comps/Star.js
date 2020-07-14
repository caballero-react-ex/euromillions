import React, { Component } from 'react';


class Star extends Component {
  render() {
    return (
      <div className={`Ball Star ${this.props.rolling && "shaking"}`}>
        {this.props.num}
        <span className="Star-icon material-icons">grade</span>
      </div>
    )
  }
}

export default Star;
