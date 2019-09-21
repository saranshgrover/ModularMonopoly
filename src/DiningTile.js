import React, { Component } from 'react'
import "./css/DiningTile.scss"

class DiningTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
    return (
        <div class="space dining">
            <div class="container">
                <div class="name">{this.props.propertyName}</div>
                <i class="drawing fa fa-subway"></i>
                <div class="price">Price: {this.props.footerPrice}</div>
            </div>
        </div>
    )
    };
}
export default DiningTile;