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
      smile: [{ key: 1, value: 0 }, { key: 2, value: 0 }, {key: 3, value: 0 }, {key: 4, value: 0 }, {key: 5, value: 0 }],
      winner: ''
    }
  }

  choiseSmile(id, count) {
    const idx = this.state.smile.findIndex(item => item.key === id)
    const newArr = {...this.state}
    newArr.smile.splice(idx,1, {key: id, value: count})
    this.setState({...newArr})
  }

  showResult() {
    const array = this.state.smile.map((item) => item.value)
    const maxElem = Math.max(...array)
    const idx = this.state.smile.findIndex((item) => item.value == maxElem)

    if (maxElem !== 0) {
      this.setState({ ...this.state, winner: `smile${idx+1}` })
    }
  }



  render() {
    return (
      <div className="myApp">
        <div className='container'>

          {this.state.smile.map(item => {
            return (<Smile key={ item.key} imageSrc={`./image/${item.key}.jpeg`}  name={`smile${item.key}`} id={item.key} count={item.value} choiseSmile={this.choiseSmile} winner={this.state.winner} />)
          })}

        </div>
          <ShowResult showResult={this.showResult} winner={this.state.winner} />
          <span></span>
      </div>
    );
  }
}

export default MyApp;
