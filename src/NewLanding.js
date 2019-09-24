import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Player from './Player.js';
import PlayerForm from './PlayerForm.js';
import './css/NewLanding.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus  } from '@fortawesome/free-solid-svg-icons'
import { Constants } from './Constants.js'
import { updateExpression } from '@babel/types';
class NewLanding extends Component { 
    constructor(props) {
        super();
        this.state = {
            NumPlayer: 1,
            PlayerNames: ["Anonymous 1"],
            PlayerColors: ["#000000"]
        };
        this.addPlayer = this.addPlayer.bind(this);
        this.editPlayer = this.editPlayer.bind(this);
    }
    /* Callback to add a new player */
    addPlayer() {
        let NewPlayer =this.state.NumPlayer+1;
        if(NewPlayer<=Constants.MaxPlayer) {
            this.setState({
                NumPlayer: NewPlayer,
                PlayerNames: this.state.PlayerNames.push("Anonymous " + NewPlayer),
                PlayerColors: this.state.PlayerColors.push("#000000")
            });
        }
    }
    /* Callback to update the values of a player passed along by the PlayerForm Component */
    /* It kind of works but it doesn't get the full name*/
    editPlayer(index, Name, Color) {
        console.log(`Index: ${index}, Name: ${Name}, Color: ${Color}`);
        if(index < this.state.PlayerNames.length && index < this.state.PlayerNames.length) {
            if(this.state.PlayerNames[index]!=Name) {
                let newPlayerNames = this.state.PlayerNames.slice();
                newPlayerNames[index] = Name;
                this.setState({
                    PlayerNames: newPlayerNames
                }, () => {
                    console.log("Changed Name to:" + this.state.PlayerNames[index]);
                });
            }
            if(this.state.PlayerColors[index]!=Color) {
                let newPlayerColors = this.state.PlayerColors.slice();
                this.setState({
                    PlayerColors: newPlayerColors
                });
            }
            }
            //console.log("Changed Name to:" + this.state.PlayerNames[index]);
        }
    render() {
        let items = [];
        for(let itemNumber = 0; itemNumber<this.state.NumPlayer;itemNumber++) {
            items.push(<PlayerForm num={itemNumber+1} name={this.state.PlayerNames[itemNumber]} color={this.state.PlayerColors[itemNumber]} callback={this.editPlayer}/>);
        } 
        return (
            <div className="Landing">
                {items}
                <FontAwesomeIcon icon={faPlus} onClick={this.addPlayer} className="addPlayer"/>
            </div>
        );
    }
}

export default NewLanding;