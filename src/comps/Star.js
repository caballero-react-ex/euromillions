import React, { Component } from 'react';
import StarIcon from './StarIcon';


class Star extends Component {
  render() {
    return (
    
      <div className="Star Ball">
        {this.props.num}
        <span className="Star-icon material-icons">grade</span>
      </div>
    )
  }
}

export default Star;