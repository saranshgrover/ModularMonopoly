import React, { Component } from 'react';
import GameBoard from './GameBoard';
import {Redirect} from 'react-router-dom';

class Landing extends Component {
    constructor(props) {
        super();
        this.state = {
            name1: '',
            piece1: '',
            name2: '',
            piece2: '',
            name3: '',
            piece3: '',
            name4: '',
            piece4: '',
            readyToRedirect: false,
            NumPlayers: 0,
            UserObjects: new Array()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.name + " " + event.target.value);
        this.setState({[event.target.name]: event.target.value});
      }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({readyToRedirect: true});


    }

    render() {
        return (

            <div className="Landing">
                {this.state.readyToRedirect &&  <Redirect to = {{
            pathname: '/play',
            state: {numPlayers: this.state.NumPlayers, userObjects: this.state.UserObjects}
        }}/>}
                <div className="Title">
                    <h1> Welcome To</h1>
                    <h2> SBU MONOPOLY</h2>
                </div>
                <div className="PlayPicker">
                    <form onSubmit={this.handleSubmit}>
                        <div className="User1">
                            <label>
                                User 1 Nickname:
                                <input type="text" value={this.state.Name1} onChange={this.handleChange} name="name1"></input>
                            </label>
                            <label>
                                User 1 Piece/Color:
                                <select name="pieces1" size="4" value={this.state.Piece1} onChange={this.handleChange}>
                                    <option value="car">Car</option>
                                    <option value="airplane">Airplane</option>
                                    <option value="skateboard">Skateboard</option>
                                    <option value="hat ">Hat</option>
                                </select>
                            </label>
                        </div>
                        <div className="User2">
                            <label>
                                User 2 Nickname:
                                <input type="text" value={this.state.Name2} onChange={this.handleChange} name="name2"></input>
                            </label>
                            <label>
                                User 2 Piece/Color:
                                <select name="pieces2" size="4" value={this.state.Piece2} onChange={this.handleChange}>
                                    <option value="car">Car</option>
                                    <option value="airplane">Airplane</option>
                                    <option value="skateboard">Skateboard</option>
                                    <option value="hat ">Hat</option>
                                </select>
                            </label>
                        </div>
                        <div className="User3">
                            <label>
                                User 3 Nickname:
                                <input type="text" value={this.state.Name3} onChange={this.handleChange} name="name3"></input>
                            </label>
                            <label>
                                User 3 Piece/Color:
                                <select name="pieces3" size="4" value={this.state.Piece3} onChange={this.handleChange}>
                                    <option value="car">Car</option>
                                    <option value="airplane">Airplane</option>
                                    <option value="skateboard">Skateboard</option>
                                    <option value="hat ">Hat</option>
                                </select>
                            </label>
                        </div>
                        <div className="User4">
                            <label>
                                User 4 Nickname:
                                <input type="text" value={this.state.Name4} onChange={this.handleChange} name="name4"></input>
                            </label>
                            <label>
                                User 4 Piece/Color:
                                <select name="pieces4" size="4" value={this.state.Piece4} onChange={this.handleChange}>
                                    <option value="car">Car</option>
                                    <option value="airplane">Airplane</option>
                                    <option value="skateboard">Skateboard</option>
                                    <option value="hat ">Hat</option>
                                </select>
                            </label>
                        </div>
                        <div className="Submit">
                        <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Landing;