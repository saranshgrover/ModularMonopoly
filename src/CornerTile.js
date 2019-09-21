import React, { Component } from 'react'
import "./css/CornerTile.scss"

class CornerTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
    return (
        <div className="CornerTile">
            <image className="CornerTileImg" src={this.props.imgSrc}></image>
        </div>
    )
    };
}
export default CornerTile;