import React, { Component } from 'react';
import '../src/CSS/App.css'
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
        {/*7. Make a div that has an h2 and two buttons */}
        <div className='button-box'>

          {/* 8. Inside the h2 keep score, start at 0  */}
          <h2> Score: 0</h2>

          {/* 9. Make one button add the points to the score and the other to subtract points from the score (just add or subtract 1 point - using the points value from jService is Hungry for More) */}
          <button type="submit" className='add'>Add Points </button>

          <button type="submit" className='subtract'>Subtract Points </button>

        </div>

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
