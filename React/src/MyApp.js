import React, { Component } from 'react';
import './MyApp.css';
import ShowResult from './ShowResult.jsx';
import Smile from './Smile.jsx';



// На странице отображается список смайликов и счетчик кликов по каждому
//Ниже есть кнопка “Show Results” которая выводит победивший смайл на основании количества голосов


class MyApp extends Component {
  constructor(props) {
    super(props);
    this.choiseSmile = this.choiseSmile.bind(this)
    this.showResult = this.showResult.bind(this)
    this.state = {
      smile1: 0,
      smile2: 0,
      smile3: 0,
      smile4: 0,
      smile5: 0,
      winner: '',
      // isShowResult: false,

    }
  }

  choiseSmile(id, count) {
    this.setState({ ...this.state, [id]: count });
  }

  showResult() {
    console.log('state in showresult', this.state)
    const arr = Object.values(this.state);

    const maxElem = Math.max(...arr)
    const idx = arr.findIndex((element) => element === maxElem)

    const keys = Object.keys(this.state);

    let win = keys[idx];
    if (maxElem !== 0) {
      this.setState({ ...this.state, winner: win })
    }

    console.log(this.state)
    // this.setState({ ...this.state, isShowResult: true })

  }

  render() {
    // console.log('state in render', this.state)
    return (
      <div className="myApp">
        <div className='container'>
          <Smile imageSrc='./image/1.png' id='smile1' count={this.state.smile1} choiseSmile={this.choiseSmile} winner={this.state.winner} />
          <Smile imageSrc='./image/2.jpeg' id='smile2' count={this.state.smile2} choiseSmile={this.choiseSmile} winner={this.state.winner} />
          <Smile imageSrc='./image/3.jpeg' id='smile3' count={this.state.smile3} choiseSmile={this.choiseSmile} winner={this.state.winner} />
          <Smile imageSrc='./image/4.jpeg' id='smile4' count={this.state.smile4} choiseSmile={this.choiseSmile} winner={this.state.winner} />
          <Smile imageSrc='./image/5.jpeg' id='smile5' count={this.state.smile5} choiseSmile={this.choiseSmile} winner={this.state.winner} />

        </div>
        <ShowResult showResult={this.showResult} winner={this.state.winner} />
        <span></span>
      </div>
    );
  }
}

export default MyApp;
