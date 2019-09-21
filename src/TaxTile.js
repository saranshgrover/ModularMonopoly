import React, { Component } from 'react';
import './css/TaxTile.scss';

class TaxTile extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        // Reference all props by doing: this.props.(prop name here). Assume props are accessable 
        let propertyName = this.props.propertyName;
        let spaceClass = "space";
        if(propertyName="Income Tax")
            spaceClass += " income-tax";
        else
            spaceClass += " luxary-tax";
        return (
            <div class={spaceClass}>
                <div class="container">
                    <div class="name">{this.props.propertyName}</div>
                    <div class="drawing fa fa-diamond"></div>
                    <div class="instructions">{this.props.footerPrice}</div>
                </div>
            </div>
        );
    };

}
export default TaxTile;