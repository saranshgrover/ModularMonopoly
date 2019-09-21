import React, { Component } from 'react'

class InformationBoard extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        //Player.userName
        //Player.nameOfPiece
        //properties array????
        //Player.currentMoney
        //Player.isTurn
        //Player.isInJail
        //Player.getOutOfJailAmount
        //Player.houseCount
        //Player.hotelCount

        //How many turns left
        //Properties?
        //array of all users
        <div className="playerName">
            {this.props.userObjects.map(player => {
                return (
                    <div className="INSERTNAMEHERE" key={player.userName}>

                    </div>
                )
            })}
        </div>
    }
}