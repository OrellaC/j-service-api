import React, { Component } from 'react';

class App extends Component {

  state ={
    randomQuestion: 'randomQuestion'
  }

  handleSubmit = e => {
    e.preventDefault()

    fetch('http://jservice,io/api/random')
    .then(response => response.json())
    .then(data => this.setState({randomQuestion: data[0].question}))
    .catch(error => console.error(error))
  }

  render() {
    return (
      <div>

        <button onClick={this.handleSubmit}>Random Trivia Question</button>
        
      </div>
    );
  }
}

export default App;
