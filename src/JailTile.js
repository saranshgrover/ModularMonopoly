import React, { Component } from 'react'
import "./css/tiles.scss"

class JailTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
    return (
        <div class="JailTile">
           <div class="just">Just</div>
			<div class="drawing">
				<div class="container">
					<div class="name">In</div>
					<div class="window">
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
						<i class="person fa fa-frown-o"></i>
					</div>
					<div class="name">Jail</div>
				</div>
			</div>
			<div class="visiting">Visiting</div>
        </div>
    )
    };
}
export default JailTile;