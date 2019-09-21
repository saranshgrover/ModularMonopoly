import React, { Component } from 'react'
import "./css/tiles.scss"

class GoToJailTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
    return (
        <div class="GoToJailTile">
            <div class="container">
				<div class="name">Go To</div>
				<i class="drawing fa fa-gavel"></i>
				<div class="name">Jail</div>
			</div>
        </div>
    )
    };
}
export default GoToJailTile;