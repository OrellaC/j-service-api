import React, { Component } from 'react';
import './App.css'
import GameInfo from './GameInfo';

class App extends Component {

  state = {
    jeopardyInfo: {},
    show: false
  }

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://jservice.io/api/random')
    .then(response => response.json())
    .then(data => this.setState({ jeopardyInfo: data[0]}))
    .then(() => console.log(this.state.jeopardyInfo))
    .catch(error => console.error(error))
  }

  handleSubmitTwo = e => {
    e.preventDefault()

    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => this.setState({ jeopardyInfo: data[0]}))
      .then(() => console.log(this.state.jeopardyInfo))
      .catch(error => console.error(error))
  }


  render() {
    const {show} = this.state
        return (
      <div id = "container">
        <div>
        <h1>Welcome to Jeopardy!</h1>

        <button type="submit" onClick={this.handleSubmit}>Question</button>

        <GameInfo jeopardyInfo={this.state.jeopardyInfo} />

        <button type="submit" onClick={() => this.setState({ show: !show })}> Answer </button>

        <h4 style={{display: (show ? "block" : "none")}}> Question: {this.state.jeopardyInfo?.answer} </h4>
        </div>
      </div>
    );
  }
}

export default App;
