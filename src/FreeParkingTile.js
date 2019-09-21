import React, { Component } from 'react'
import "./css/tiles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar  } from '@fortawesome/free-solid-svg-icons'

class FreeParkingTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
    return (
        <div class="FreeParkingTile container">
            <div class="name">Free</div>
            <FontAwesomeIcon className="drawing" icon={faCar} />
            <i class="drawing fa fa-car"></i>
            <div class="name">Parking</div>
        </div>
    )
    };
}
export default FreeParkingTile;