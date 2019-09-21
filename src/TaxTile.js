import React, { Component } from 'react';
import './css/TaxTile.scss';

class TaxTile extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        // Reference all props by doing: this.props.(prop name here). Assume props are accessable 
        let nameOfProperty = this.props.nameOfProperty;
        return (
            <div className="TaxTile">
                {/* Put html here */}
                <div className="TaxTileName">
                    <p>{this.props.propertyName}</p>
                </div>
                <div className="TaxTilePicture">
                    <image src={this.props.imgSrc}></image>
                </div>
                <div className="TaxTileFooter">
                    <p>{this.props.footerPrice}</p>
                </div>
            </div>
        );
    };

}