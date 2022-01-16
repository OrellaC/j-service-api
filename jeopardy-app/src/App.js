import React, { Component } from 'react';
import '../src/CSS/App.css'
import Score from './Score';
import GameInfo from './GameInfo';

class App extends Component {

  state = {
    jeopardyInfo: {},
    show: false
  }

  //2.  On click, have this button that will make a GET request (using fetch) to get random trivia data. Let's start you off with a win by giving you the URL: http://jservice.io/api/random

  handleSubmit = e => {
    e.preventDefault()
    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => this.setState({ jeopardyInfo: data[0] }))
      .then(() => console.log(this.state.jeopardyInfo))
      .catch(error => console.error(error))
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
    const { show } = this.state
    return (

      // 3. Make some html elements like a div where you will display the question, category and points. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).

      <div id="container">

        <div className='header'>
          <h1>Welcome to Jeopardy!</h1>
        </div>
          
          <Score />


        {/* 1. Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive. */}
        <h2>Let's Play!</h2>
        <button type="submit" className='question' onClick={this.handleSubmit}>Get Question</button>

        <GameInfo jeopardyInfo={this.state.jeopardyInfo} />

        {/* 4. Make another div in your HTML where you display the answer */}
        {/* 5. Add an on click, that has a function that will toggle whether or not you can see the answer. */}

        <div className='answer-box'>
          <button type="submit" className='answer' onClick={() => this.setState({ show: !show })}> Answer </button>
        </div>

        <h4 style={{ display: (show ? "block" : "none") }}>  {this.state.jeopardyInfo?.answer} </h4>


      </div>
    );
  }
}

export default App;
