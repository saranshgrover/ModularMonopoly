import React, { Component } from 'react'

class HouseTile extends Component {
    constructor(props) {
        super();
    }

    render() {
        // Reference all props by doing: this.props.(prop name here). Assume props are accessable 
        let nameOfProperty = this.props.nameOfProperty;
        return (
            <div className="HouseTile">
                {/* Put html here */}
                <p>{nameOfProperty}</p>
            </div>
        );
    };

}