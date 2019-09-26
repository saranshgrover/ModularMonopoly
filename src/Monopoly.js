import React, { Component } from 'react';
import GameBoard from './GameBoard';
import { Redirect } from 'react-router-dom';
import InformationBoard from './InformationBoard';
import './css/Monopoly.scss';

class Monopoly extends Component {
    constructor(props) {
        super(props);
        if (typeof this.props.location.state != "undefined")
            if (typeof this.props.location.state.userObjects != "undefined")
                this.state = {
                    readyToPlay: true,
                    userObjects: this.props.location.state.userObjects,
                    currentPlayerTurn: this.props.location.state.userObjects[0],
                    turnCount: 0,
                    landedOnProperty: false
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
        let numPlayers = this.state.userObjects.length;
        let nextPlayerIndex = null;
        if (indexOfPlayer === numPlayers - 1)
            nextPlayerIndex = 0;
        else  
            nextPlayerIndex = indexOfPlayer + 1;
            console.log(this.state.userObjects);
        console.log(this.state.userObjects[nextPlayerIndex]);
        this.setState({currentPlayerTurn: this.state.userObjects[nextPlayerIndex]});
    }

    rollDice(amountRolled) {
        let currentPlayerTurn = this.state.currentPlayerTurn;
        let indexOfPlayer = this.state.userObjects.indexOf(currentPlayerTurn);
        let userObjects = this.state.userObjects;
        let newPos = currentPlayerTurn.currentPosition + amountRolled;
        if(newPos>39) {
            currentPlayerTurn.balance +=(200);
            newPos-=39;
        }
        userObjects[indexOfPlayer].currentPosition =(newPos);
        userObjects[indexOfPlayer].hasRolled = (true);
        this.setState({
            userObjects: userObjects,
            landedOnProperty: true
        });
        console.log(this.state.userObjects);
    }
    executeTurn(indexOfPlayer) {

        this.nextPlayerTurn();
    }
    render() {
        return (
            <div className="Monopoly">
                {this.state.readyToPlay === false 
                ? <Redirect to='/new' /> 
                : <div>
                    <GameBoard currentPlayer={this.state.currentPlayerTurn} landedOnProperty={this.state.landedOnProperty} />
                    <InformationBoard userObjects={this.state.userObjects} rollDice={this.rollDice} currentPlayer={this.state.currentPlayerTurn} />
                  </div> }
            </div>
        );
    }
}

export default Monopoly;