import React, { Component } from 'react';

class Smile extends Component {
  constructor(props) {
    super(props);
    this.handleChoise = this.handleChoise.bind(this);
    this.state = [{ smile: 0 }]
  }

  handleChoise(){
    this.state.setState(...this.state, 1);
  };

  render() {
    return (
    <div className='item'>
      <img className="smile" src="" alt="smile"></img>
      <button onClick={this.handleChoise}>Choise me!</button>
    </div>
    )
  }


}

export default Smile;
