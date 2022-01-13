import React, { Component } from 'react';

class App extends Component {

  state = {
    jeopardyInfo: {}
  }

  handleSubmit = e => {
    e.preventDefault()

    fetch('http://jservice.io/api/random')
      .then(response => response.json())
      .then(data => this.setState({ jeopardyInfo: data[0]}))
      .catch(error => console.error(error))
  }

  render() {
    return (
      <div>
        {/* 1. Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive. */}
        {/* 2. On click, have this button that will make a GET request (using fetch) to get random trivia data. Let's start you off with a win by giving you the URL: http://jservice.io/api/random */}

        <h1>Welcome to Jeopardy!</h1>

        {/* 3. Make some html elements like a div where you will display the question, category and points. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?)*/}
        <div className='container'>
          <h3>Question</h3>
          <h3>Category</h3>
          <h3>Points</h3>
        </div>

        {/* 4. Make another div in your HTML where you display the answer */}
        <div className='answer-box'>
          {/* Add an on click, that has a function that will toggle whether or not you can see the answer. */}
          <button type='answer' onClick={ }></button>
        </div>
        <button onClick={this.handleSubmit}>Random Trivia Question</button>

      </div>
    );
  }
}

export default App;
