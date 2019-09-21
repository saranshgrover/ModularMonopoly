import React, { Component } from 'react';
import './css/HouseTile.css';

class HouseTile extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="HouseTile">
                <p>{this.props.propertyName}</p>
                <img src={this.props.imgSrc} alt={this.props.propertyName}></img>
                <p>{this.props.footerPrice}</p>
            </div>
        );
    };

}

export default HouseTile; // Export the name of the component!!!