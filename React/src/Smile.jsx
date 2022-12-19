import React, { Component } from 'react';
import MyApp from './MyApp.js';

class Smile extends Component {
  constructor(props) {
    super(props);
    // console.log('props in Smile', props)
    this.handleChoise = this.handleChoise.bind(this);
    this.state = {
      // id: this.props.id,
      count: 0,
    }
  }

  handleChoise() {
    let value = this.state.count;
    // console.log('value', value) // wrong!!!
    console.log('state before', this.state);

    this.setState({count: value+1 });
    // this.setState(state => ({count: state.count + 1}));
    console.log('state after', this.state);

    // console.log('this.state in handleChoise', this.state);

    this.props.choiseSmile(this.props.id, this.state.count)
    // console.log(this.state);
  };

  render() {
    return (
      <li>
        <div className='item'>
          <button id={this.props.id} onClick={this.handleChoise}><img className="smile" src={this.props.imageSrc} alt="smile"></img></button>
          <span>{this.state.count}</span>
        </div>
    </li>
    )
  }


}

export default Smile;
