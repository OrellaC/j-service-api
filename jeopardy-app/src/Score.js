import React, { Component } from 'react';
import '../src/CSS/App.css'

// I used this resource to create this component https://medium.com/@aghh1504/2-increment-and-decrease-number-onclick-react-5767b765103c

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 100 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 100 });
    }


    render() {
        return (
            /*7. Make a div that has an h2 and two buttons */
            <div>
                {/* 9. Make one button add the points to the score and the other to subtract points from the score (just add or subtract 1 point - using the points value from jService is Hungry for More) */}

                <button className='add' onClick={this.IncrementItem}>Add Points </button>
                <button className='subtract' onClick={this.DecreaseItem}>Subtract Points</button>

                {/* 8. Inside the h2 keep score, start at 0  */}

                <h2> Score: {this.state.clicks} </h2>
            </div>
        );
    }
}
export default Score;


