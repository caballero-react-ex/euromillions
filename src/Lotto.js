import React, { Component } from 'react';
import './Lotto.css';
import Ball from './Ball';
import Star from './Star';

let twoDigitNum = (number) => (number <= 10 ? `0${number}`.slice(-2) : number);

class Lotto extends Component {
  static defaultProps = {
    title: 'Lotto',
    totalBalls: 6,
    totalStars: 0,
    maxNum: 40,
    maxNumStar: 9
  }
  constructor(props) {
    super(props);
    this.state = {nums: Array.from({length: this.props.totalBalls}),
    numsStar: Array.from({length: this.props.totalStars})
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomNum() {
    let randomNumsArr = Array.from({length: this.props.totalBalls}, () => Math.floor(Math.random() * 50) +1);
    let randomNumsStarArr = Array.from({length: this.props.totalStars}, () => Math.floor(Math.random() * 12) +1);
    
    this.setState(curState => ({
      nums: randomNumsArr,
      numsStar: randomNumsStarArr
    }))
  }

  handleClick() {
    this.getRandomNum();
  }

  render() {
    return (
      <div className='Lotto'>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => <Ball num={twoDigitNum(n)} />)}
          {this.state.numsStar.map(n => <Star num={twoDigitNum(n)} />)}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}



export default Lotto;
