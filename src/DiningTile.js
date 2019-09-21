import React, { Component } from 'react'
import "./css/DiningTile.scss"

class DiningTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
    return (
        <div className="DiningTile">
            <image className="DiningTileImg" src={this.props.imgSrc}></image>
            <div className="DiningTileName">
                <p>{this.props.propertyName}</p>
            </div>
            <div className="DiningTileFooter">
                <p>{this.props.footerPrice}</p>
            </div>
        </div>
    )
    };
}
export default DiningTile;