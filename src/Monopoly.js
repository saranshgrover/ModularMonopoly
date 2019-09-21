import React, { Component } from 'react';
import './Monopoly.scss';
import GameBoard from './GameBoard';

class Monopoly extends Comment {
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