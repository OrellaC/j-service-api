import React, { Component } from 'react';

class GameInfo extends Component {
    render(props) {
        return (
            <div>
                <h2>Score: 0 </h2>
                <h1>Let's Play</h1>
                <h2>Category: {this.props.jeopardyInfo.category?.title}</h2>
                <h2>Points: {this.props.jeopardyInfo?.value}</h2>
                <h2>Question: {this.props.jeopardyInfo?.question}</h2>
            </div>
        );
    }
}

export default GameInfo;
