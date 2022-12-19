import React, { Component, Fragment } from 'react';

class ShowResult extends Component {
  constructor(props) {
    super(props);
    this.handleShowResult = this.handleShowResult.bind(this);
  }

  handleChoise(){

  };

  render() {
    return (
      <Fragment>
        <button onClick={this.handleShowResult}>Show Result</button>
        <span> </span>
      </Fragment>
    )
  }


}

export default ShowResult;
