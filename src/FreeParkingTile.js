import React, { Component } from 'react'
import "./css/tiles.scss"

class FreeParkingTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
    return (
        <div class="FreeParkingTile">
            <div class="container">
				<div class="name">Free</div>
				<i class="drawing fa fa-car"></i>
				<div class="name">Parking</div>
			</div>
        </div>
    )
    };
}
export default FreeParkingTile;