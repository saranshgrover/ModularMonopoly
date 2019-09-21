import React, { Component } from 'react'
import "./css/tiles.scss"

class CornerTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        let bgStyle = '';
        let tileId = this.props.tileId;
        let playerId = this.props.player_pos;
        if(playerId==tileId) {
            bgStyle += "background-color: " + this.props.player_color;
        }
    return (
        <div className="space corner go" style={{bgStyle}}>
            <div className="container">
                <div className="instructions">Collect $200.00 salary as you pass</div>
                <div className="go-word">go</div>
            </div>
            <div className="arrow fa fa-long-arrow-left"></div>
        </div>
    )
    };
}
export default CornerTile;