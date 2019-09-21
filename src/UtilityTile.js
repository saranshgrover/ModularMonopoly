import React, { Component } from 'react';
import './css/UtilityTile.css';

class UtilityTile extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="UtilityTile">
                <p className="UtilityTileName">{this.props.propertyName}</p>
                <img className="UtilityTileImage" src={this.props.imgSrc} alt={this.props.propertyName}></img>
                <p className="UtilityTileFooter">{this.props.footerPrice}</p>
            </div>
        );
    }

}

export default UtilityTile;