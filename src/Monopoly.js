import React, { Component } from 'react';
import GameBoard from './GameBoard';
import Player from './Player.js';
import { Redirect } from 'react-router-dom';
import InformationBoard from './InformationBoard';

class Monopoly extends Component {
    constructor(props) {
        super(props);
        if (typeof this.props.location.state != "undefined")
            this.state = {
                readyToPlay: true,
                userObjects: this.props.location.state.userObjects,
                currentPlayerTurn: null,
                turnCount: 0
            };
        else
            this.state = {
                readyToPlay: false
            };
    }

    // componentDidMount() {
    //     if (this.state.userObjects.length == 0) {
    //         this.setState({readyToPlay: false});
    //     }
    // }

    render() {
        return (
            <div className="Monopoly">
                {!this.state.readyToPlay && <Redirect to='/' /> }
                <GameBoard userObjects={this.state.userObjects} />
                <InformationBoard userObjects={this.state.userObjects} />
            </div>
        );
    }
}

export default Monopoly;