import React, { Component } from 'react';
import "./css/PlayerForm.scss";
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Textarea from 'muicss/lib/react/textarea';


class PlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: this.props.name,
            Color: this.props.color
        };
        this.onChange = this.onChange.bind(this);
    };
    onChange(ev) {
        this.setState({[ev.target.name]:[ev.target.value]}, () => {
            this.props.callback(this.props.num-1,this.state.Name,this.state.Color)
        });
    }
    render() {
        return(
            <div className="PlayerForm">
                <Form inline={true}>
                    <legend>Player {this.props.num}</legend>
                    <Input onChange={this.onChange} label="Name" type="text" name="Name" maxLength="12" placeholder="username" className="name" value={this.state.Name}/>
                    <Input onChange={this.onChange} label="Color" type="color" name="Color" className="color" value={this.state.Color}/>
                </Form>
            </div>
        );
    };
}
export default PlayerForm;
