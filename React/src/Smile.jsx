import React, { Component } from 'react';

class Smile extends Component {
  constructor(props) {
    super(props);
    console.log('props in Smile', props)
    this.handleChoise = this.handleChoise.bind(this);
  }

  handleChoise() {

    this.props.choiseSmile(this.props.id, this.props.count + 1)
  };

  render() {
    if (this.props.winner) {
      return (
        <li>
          <div className='item'>
            <button id={this.props.id} onClick={this.handleChoise}><img className="smile" src={this.props.imageSrc} alt="smile"></img></button>

            <span>{this.props.count}</span>
          </div>
      </li>
      )
    } else {
      return (
        <li>
          <div className='item'>
            <button id={this.props.id} onClick={this.handleChoise}><img className="smile" src={this.props.imageSrc} alt="smile"></img></button>
            {/* <span>{this.props.count}</span> */}

          </div>
      </li>
      )
    }

  }


}

export default Smile;
