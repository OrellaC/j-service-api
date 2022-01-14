import React, { Component } from 'react';
import GameInfo from './GameInfo';

class App extends Component {

  state = {
    jeopardyInfo: {}
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  handleSubmitTwo = e => {
    e.preventDefault()

    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => this.setState({ jeopardyInfo: data[0] }))
      .then(() => console.log(this.state.jeopardyInfo))
      .catch(error => console.error(error))
  }



  render() {
    return (
      <div>
        <h1>Welcome to Jeopardy!</h1>

        <button type="submit" onClick={this.handleSubmit}>Answer</button>

        <GameInfo jeopardyInfo={this.state.triviaInfo} />

        <button type="submit" onClick={() => this.setState({ show: !show })}>Question </button>

        <h4 style={{display: (show ? "block" : "none")}}>Question: {this.state.jeopardyInfo?.answer}> </h4>

      </div>
    );
  }
}

export default App;
