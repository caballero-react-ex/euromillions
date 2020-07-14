import React, { Component } from 'react';

import Ball from './Ball';
import Star from './Star';
import Header from './Header';

import { v4 as uuidv4 } from 'uuid';


let twoDigitNum = (number) => (number <= 10 ? `0${number}`.slice(-2) : number);

class Lotto extends Component {
  static defaultProps = {
    title: 'Lotto',
    totalBalls: 6,
    totalStars: 0,
    maxNum: 40,
    maxNumStar: 9,
  }
  constructor(props) {
    super(props);
    this.state = {nums: Array.from({length: this.props.totalBalls}),
    numsStar: Array.from({length: this.props.totalStars}),
    id: uuidv4(),
    rolling: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomNum(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
  getRandomNumArr() {
    let arrNums = [];
    let arrNumsStar = [];
    // Normal Numbers
    while (arrNums.length < this.props.totalBalls) {
      let randNum = this.getRandomNum(1,50);
      if(arrNums.indexOf(randNum) === -1){
        arrNums.push(randNum);
      }
    }
    // Stars Numbers
    while (arrNumsStar.length < this.props.totalStars) {
      let randNumStar = this.getRandomNum(1,12);
      if(arrNumsStar.indexOf(randNumStar) === -1){
        arrNumsStar.push(randNumStar);
      }
    }

    this.setState(curState => ({
      nums: arrNums.sort(function(a, b){return a-b}),
      numsStar: arrNumsStar.sort(function(a, b){return a-b}),
    }))
  }

  handleClick() {
    this.getRandomNumArr();

    //set state with new rolls
    this.setState({ rolling: true });

    //wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className='Lotto'>
        < Header />
        <span className="Lotto-header-line"></span>
        <div className='Lotto-Ball-container'>
          {this.state.nums.map(n => 
            < Ball 
              num={twoDigitNum(n)} 
              key={uuidv4()} 
              rolling={this.state.rolling} 
            />
          )}
          {this.state.numsStar.map(n => 
            < Star 
              num={twoDigitNum(n)} 
              key={uuidv4()} 
              rolling={this.state.rolling} 
            />
          )}
        </div>
        <button className={`Lotto-btn ${this.state.rolling && "dis"}`} onClick={this.handleClick} disabled={this.state.rolling}>
        {this.state.rolling ? "Getting..." : "Get Numbers"}
        </button>
      </div>
    );
  }
}



export default Lotto;
