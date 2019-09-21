import React, { Component } from 'react';
import GameBoard from './GameBoard';
import Player from './Player.js';
import { Redirect } from 'react-router-dom';
import InformationBoard from './InformationBoard';

class Monopoly extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props.location.state);
        // console.log(this.props.location.state.userObjects);
        // console.log(this.props.location.state.userObjects[0]);
        if (typeof this.props.location.state != "undefined")
            if (typeof this.props.location.state.userObjects != "undefined")
                this.state = {
                    readyToPlay: true,
                    userObjects: this.props.location.state.userObjects,
                    currentPlayerTurn: this.props.location.state.userObjects[0],
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
        this.rollDice = this.rollDice.bind(this);
        this.nextPlayerTurn = this.nextPlayerTurn.bind(this);
    }

    nextPlayerTurn() {
        let currentPlayerTurn = this.state.currentPlayerTurn;
        let indexOfPlayer = this.state.userObjects.indexOf(currentPlayerTurn);
        console.log(indexOfPlayer + " and total players: " + this.state.userObjects.length);
        let numPlayers = this.state.userObjects.length;
        let nextPlayerIndex = null;
        if (indexOfPlayer == numPlayers - 1)
            nextPlayerIndex = 0;
        else  
            nextPlayerIndex = indexOfPlayer + 1;
            console.log(this.state.userObjects);
        console.log(this.state.userObjects[nextPlayerIndex]);
        this.setState({currentPlayerTurn: this.state.userObjects[nextPlayerIndex]});
    }

    rollDice(amountRolled) {
        console.log("Amount rolled: " + amountRolled);
        console.log(this.state.currentPlayerTurn);
        let currentPlayerTurn = this.state.currentPlayerTurn;
        let indexOfPlayer = this.state.userObjects.indexOf(currentPlayerTurn);
        let users = [...this.state.userObjects];
        let user = {...users[indexOfPlayer]};
        user.currentPosition = user.currentPosition + amountRolled;
        users[indexOfPlayer] = user;
        //console.log(user);
        // currentPlayerTurn: {...st.currentPlayerTurn,  currentPosition: st.currentPlayerTurn.currentPosition + amountRolled},
        this.setState(st => ({
            userObjects: [
                ...st.userObjects.slice(0, indexOfPlayer),
                user,
                ...st.userObjects.slice(indexOfPlayer + 1)
            ]
        }));
        console.log(this.state.currentPlayerTurn);
        console.log(this.state.userObjects[0]);
    }

    render() {
        return (
            <div className="Monopoly">
                {this.state.readyToPlay == false 
                ? <Redirect to='/' /> 
                : <div>
                    <GameBoard userObjects={this.state.userObjects} />
                    <InformationBoard userObjects={this.state.userObjects} rollDice={this.rollDice} currentPlayer={this.state.currentPlayerTurn} />
                  </div> }
            </div>
        );
    }
}

export default Monopoly;