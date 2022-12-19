import React, { Component, Fragment } from 'react';

class ShowResult extends Component {
  constructor(props) {
    super(props);
    this.handleShowResult = this.handleShowResult.bind(this);
  }

  handleShowResult(){
    this.props.showResult()
  };

  render() {
    return (
      <div className='showresult'>
        <button onClick={this.handleShowResult}>Show Result</button>
        <span> </span>
      </div>
    )
  }


}

export default ShowResult;
