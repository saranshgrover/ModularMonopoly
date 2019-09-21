import React, { Component } from 'react';
import GameBoard from './GameBoard';

class Monopoly extends Component {
    constructor(props) {
        super();    
    }

    render() {
        return (
            <div className="Monopoly">
                <GameBoard />
            </div>
        );
    }
}

export default Monopoly;