import React, { Component } from 'react';
import './css/tiles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGem  } from '@fortawesome/free-solid-svg-icons'

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
                    <FontAwesomeIcon className="drawing" icon={faGem} />
                    <div class="instructions">{this.props.footerPrice}</div>
                </div>
            </div>
        );
    };

}
export default TaxTile;