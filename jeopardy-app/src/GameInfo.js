import React, { Component } from 'react';

class GameInfo extends Component {
    render() {
        return (
            <div>
                <h2>Question: {this.props.jeopardyInfo.question}</h2>
                <h2>Category: {this.props.jeopardyInfo?.category}</h2>
                <h2>Points: {this.props.jeopardyInfo.value}</h2>
            </div>
        );
    }
}

export default GameInfo;
