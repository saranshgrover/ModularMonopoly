import React, { Component } from 'react'
import './css/InformationBoard.scss';
class InformationBoard extends Component {
    constructor(props) {
        super();
    }

    render() {
        let userObjects = this.props.userObjects;
        const items = []
        for(const [index,value] of userObjects.entries()) {
            items.push(
            <div className="information_board_player">
                <h1>{value.getName()}</h1>
            </div> 
            )}
        return (
            <div className="flex-container">
                {items}
            </div>
        );
    }
}

export default InformationBoard;