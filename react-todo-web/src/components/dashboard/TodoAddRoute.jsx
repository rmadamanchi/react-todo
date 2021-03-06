import React from "react";
import ReactDOM from "react-dom";
import {Form, FormGroup, FormControl, HelpBlock, Button} from "react-bootstrap";
import "./TodoAddRoute.scss";

export default class TodoAddRoute extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.input).focus();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch('/api/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: this.state.value
            })
        }).then(() => window.location.hash = 'list');
    }


    render() {
        return (
            <div className="todo-add">
                <h1>Add Todo</h1>
                <Form inline onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formBasicText">
                        <FormControl type="text" value={this.state.todo} placeholder="Todo" ref="input"
                                     onChange={this.handleChange} style={{width: '400px'}} autoComplete="off" />
                        <FormControl.Feedback />
                    </FormGroup>
                    <Button bsStyle="primary" type="submit"> Add </Button>
                </Form>
            </div>
        )
    }


}