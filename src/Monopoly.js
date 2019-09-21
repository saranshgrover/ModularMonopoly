import React, { Component } from 'react';
import GameBoard from './GameBoard';
import Player from './Player.js';
import { Redirect } from 'react-router-dom';
import InformationBoard from './InformationBoard';

class Monopoly extends Component {
    constructor(props) {
        super(props);
        if (typeof this.props.location.state != "undefined")
            if (typeof this.props.location.state.userObjects != "undefined")
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
        else
            this.state = {
                readyToPlay: false
            };
    }

    render() {
        return (
            <div className="Monopoly">
                {this.state.readyToPlay == false 
                ? <Redirect to='/' /> 
                : <div>
                    <GameBoard userObjects={this.state.userObjects} />
                    <InformationBoard userObjects={this.state.userObjects} />
                  </div> }
            </div>
        );
    }
}

export default Monopoly;