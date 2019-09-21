import React, { Component } from 'react'
import "./css/tiles.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGavel  } from '@fortawesome/free-solid-svg-icons'

class GoToJailTile extends Component {
    constructor(props) {
        super(props);
    };
    render() {
    return (
        <div class="GoToJailTile container">
            <div class="name">Go To</div>
            <FontAwesomeIcon className="drawing" icon={faGavel} />
            <i class="drawing fa fa-gavel"></i>
            <div class="name">Jail</div>
        </div>

    )
    };
}
export default GoToJailTile;