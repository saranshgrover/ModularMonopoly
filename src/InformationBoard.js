import React, { Component } from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import './css/InformationBoard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faHotel } from '@fortawesome/free-solid-svg-icons'
class InformationBoard extends Component {
    constructor(props) {
        super();
        this.rollDoneCallback = this.rollDoneCallback.bind(this);
        this.rollAll = this.rollAll.bind(this);
    }

    render() {
        let userObjects = this.props.userObjects;
        const items = []
        for(const [index,value] of userObjects.entries()) {
            items.push(
            <div className="information_board_player">
                <div className="player_name">
                    {value.getName()}
                    <FontAwesomeIcon icon={faPuzzlePiece}/>
                    {value.getPieceName()}
                </div>
                <div className="player_bank">
                    {value.getBalance()}
                    <FontAwesomeIcon icon={faHouse}/>
                    {value.getHouseCount()}
                    <FontAwesomeIcon icon={faHotel}/>
                    {value.getHotelCount*}
                </div>
                <div className="player_position">

                </div>
            </div> 
            )}
        return (
            <div className="InformationBoard">
                <div className="flex-container">
                    {items}
                </div>
                <div className="dieRoll">
                    <ReactDice
                    numDice={2}
                    rollDone={this.rollDoneCallback}
                    ref={dice => this.reactDice = dice}
                    />
                    <button onClick={this.rollAll} disabled={this.props.currentPlayer.hasRolled()}>Roll</button>
                </div>
            </div>
        );
    }
    rollDoneCallback(num) {
        this.props.rollDice(num);
      }
    rollAll() {
        this.props.currentPlayer.setRolled(true);
        this.reactDice.rollAll();
    }
}

export default InformationBoard;