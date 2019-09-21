import React, { Component } from 'react';
import './css/UtilityTile.scss';

class UtilityTile extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="UtilityTile">
                <div class="space utility electric-company">
                    <div class="container">
                        <div class="name">{this.props.propertyName}</div>
                        <i class="drawing fa fa-lightbulb-o"></i>
                        <div class="price">Price: {this.props.footerPrice}</div>
                    </div>
			    </div>
            </div>
        );
    }

}

export default UtilityTile;