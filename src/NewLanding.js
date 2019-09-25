import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Player from './Player.js';
import PlayerForm from './PlayerForm.js';
import './css/NewLanding.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus  } from '@fortawesome/free-solid-svg-icons'
import { Constants } from './Constants.js'
class NewLanding extends Component { 
    constructor(props) {
        super();
        this.state = {
            NumPlayer: 1,
            PlayerNames: ["Anonymous 1"],
            PlayerColors: ["#ff6347"],
            readyToRedirect: false,
            PlayerObjects: []
        };
        this.addPlayer = this.addPlayer.bind(this);
        this.editPlayer = this.editPlayer.bind(this);
        this.removePlayer = this.removePlayer.bind(this);
        this.submit = this.submit.bind(this);
        this.hasDuplicates = this.hasDuplicates.bind(this);
    }
    /**
     * returns true if Array contains duplicates
     * @param {Array} array 
     */
    hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }
    /**
     * Adds a new PlayerForm object with generic name and color and updates the total num players.
     */
    addPlayer() {
        let NewPlayer =this.state.NumPlayer+1;
        if(NewPlayer<=Constants.MaxPlayer) {
            let newPlayerNames = this.state.PlayerNames.slice();
            newPlayerNames.push("Anonymous " + NewPlayer);
            let newPlayerColors = this.state.PlayerColors.slice();
            newPlayerColors.push("#000000");
            this.setState({
                NumPlayer: NewPlayer,
                PlayerNames: newPlayerNames,
                PlayerColors: newPlayerColors
            });
        }
        }
    /**
     * Callback to update the values of a player passed along by the PlayerForm Component 
     * It kind of works but it doesn't get the full name
     * @param {int} index Index of element to edit
     * @param {string} Name New name to update
     * @param {string} Color New color to update
     */
    editPlayer(index, Name, Color) {
        if(index < this.state.PlayerNames.length && index < this.state.PlayerNames.length) {
            if(this.state.PlayerNames[index]!=Name) {
                let newPlayerNames = this.state.PlayerNames.slice();
                newPlayerNames[index] = Name;
                this.setState({
                    PlayerNames: newPlayerNames
                }, () => {
                    //console.log("Changed Name to:" + this.state.PlayerNames[index]);
                });
            }
            if(this.state.PlayerColors[index]!=Color) {
                let newPlayerColors = this.state.PlayerColors.slice();
                newPlayerColors[index] = Color;
                this.setState({
                    PlayerColors: newPlayerColors
                });
            }
            }
            //console.log("Changed Name to:" + this.state.PlayerNames[index]);
        }
    /**
     * Removes the last added player and updates the total num players.
     */
    removePlayer() {
        if(this.state.NumPlayer>1) {
            let newNumPlayer = this.state.NumPlayer-1;
            let newPlayerNames = this.state.PlayerNames.slice();
            newPlayerNames.pop();
            let newPlayerColors = this.state.PlayerColors.slice();
            newPlayerNames.pop();
            this.setState({
                NumPlayer: newNumPlayer,
                PlayerNames: newPlayerNames,
                PlayerColors: newPlayerColors
            });
        }
    }
    /**
     * Callback for clicking the submit button indicating that all changes are made and the game 
     * can be initialized
     * @param {event} event Event being passed
     */
    submit(event) {
        event.preventDefault();
        if(!this.hasDuplicates(this.state.PlayerNames) && !this.hasDuplicates(this.state.PlayerColors)) {
            console.log("Hello");
            let playerObjects = [];
            for(let i = 0; i<this.state.PlayerNames.length;i++) {
                playerObjects.push(new Player({
                    name: this.state.PlayerNames[i],
                    color: this.state.PlayerColors[i],
                    balance: 1500,
                    currentPosition: 0,
                    isTurn: (i==0) ? true : false,
                    isInJail: false,
                    getOutOfJailAmount: 0,
                    houseCount: 0,
                    hotelCount: 0,
                    hasRolled: false,
                }));
            }
            this.setState({
                PlayerObjects: playerObjects,
                readyToRedirect: true
            })
        }
    }
    render() {
        let items = [];
        for(let itemNumber = 0; itemNumber<this.state.NumPlayer;itemNumber++) {
            items.push(<PlayerForm key={itemNumber.toString()} num={itemNumber+1} name={this.state.PlayerNames[itemNumber]} color={this.state.PlayerColors[itemNumber]} callback={this.editPlayer}/>);
        } 
        return (
            <div className="Landing">
                {this.state.readyToRedirect &&  <Redirect to = {{
                pathname: '/play',
                state: {numPlayers: this.state.NumPlayers, userObjects: this.state.PlayerObjects}
                }}/>}
                {items}
                <FontAwesomeIcon icon={faPlus} onClick={this.addPlayer} className="addPlayer"/>
                <br/>
                <FontAwesomeIcon icon={faMinus} onClick={this.removePlayer} className="removePlayer"/>
                <br/><br/>
                <button type="submit" onClick={this.submit}>Submit</button>
            </div>
        );
    }
}

export default NewLanding;