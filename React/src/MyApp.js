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

    }
  }
  choiseSmile(id, count) {
    console.log('count in myApp', count)

    this.setState({ ...this.state, [id]: count });
    // console.log('state in myApp in choiseSmile', this.state)
  }

  showResult() {
    console.log('state in showresult', this.state)
    // const arr = Object.values(this.state);
    // console.log('arr', arr)
  }

  render() {
    const src1 = `./image/1.png`;
    const src2 = `./image/2.jpeg`;
    // console.log('state in render', this.state)
    return (
      <div className="myApp">
        <div className='container'>
          <Smile key='smile1' imageSrc={src1} id={1} choiseSmile={this.choiseSmile} />
          <Smile key='smile2' imageSrc={src2} id={2} choiseSmile={this.choiseSmile} />

          {/* <Smile />
          <Smile />
          <Smile /> */}
        </div>
        <ShowResult showResult={this.showResult} />

      </div>
    );
  }
}

export default MyApp;
