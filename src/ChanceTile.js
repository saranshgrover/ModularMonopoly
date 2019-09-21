import React, { Component } from 'react'
import './css/ChanceTile.scss'

class ChanceTile extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        let tileName = this.props.propertyName;
        if(tileName=="Chance") {
            return (
                <div className="ChanceTile">
                    <div class="space chance">
                        <div class="container">
                            <div class="name">{this.props.propertyName}</div>
                            <i class="drawing fa fa-question"></i>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="ChanceTile">
                    <div class="space community-chest">
				        <div class="container">
                            <div class="name">Community Chest</div>
                            <i class="drawing fa fa-cube"></i>
                            <div class="instructions">Follow instructions on top card</div>
				        </div>
			        </div>
                </div>
            );
        }
    };

}

export default ChanceTile;