import React, { Component } from 'react'

class ChanceTile extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        // Reference all props by doing: this.props.(prop name here). Assume props are accessable 
        let nameOfProperty = this.props.nameOfProperty;
        return (
            <div className="ChanceTile">
                {/* Put html here */}
                <div className="ChanceTileName">
                    <p>{this.props.propertyName}</p>
                </div>
                <div className="ChanceTilePicture">
                    <image src={this.props.imgSrc}></image>
                </div>
            </div>
        );
    };

}