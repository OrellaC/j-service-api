import React, { Component } from 'react';
import '../src/CSS/App.css'

class GameInfo extends Component {
    render(props) {
        return (
            <div className='game-box'>
                <h2>Category: {this.props.jeopardyInfo.category?.title}</h2>
                <h2>Points: {this.props.jeopardyInfo?.value}</h2>
                <h2>Question: {this.props.jeopardyInfo?.question}</h2>
            </div>
        );
    }
}

export default GameInfo;
