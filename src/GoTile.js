import React, { Component } from 'react'
import "./css/tiles.scss"

class CornerTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
    return (
        <div className="GoTile">
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