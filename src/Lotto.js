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


    // let randomNumsArr = Array.from({length: this.props.totalBalls}, () => Math.floor(Math.random() * 50) +1);
    // let randomNumsStarArr = Array.from({length: this.props.totalStars}, () => Math.floor(Math.random() * 12) +1);
    
    // let randomNumsTest = [...Array(4)].map(() => Math.floor(Math.random() * 9));
    // console.log(randomNumsTest);
    // console.log(randomNumsArr);
    // this.setState(curState => ({
    //   nums: randomNumsArr,
    //   numsStar: randomNumsStarArr
    // }))

  handleClick() {
    this.getRandomNumArr();
    // this.getRandomNum(1,50);
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
