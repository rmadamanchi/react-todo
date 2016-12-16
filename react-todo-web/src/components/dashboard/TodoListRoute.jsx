import React from "react";
import {Checkbox} from "react-bootstrap";

export default class TodoListRoute extends React.Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};

    }

    componentDidMount() {
        fetch('/api/todos').then((response) => {
            return response.json();
        }).then((response) => {
            this.setState({todos: response._embedded.todos});
        });
    }

    todoChecked(todo, e) {
        todo.done = e.target.checked;

        fetch('/api/todos/' + todo.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done: todo.done
            })
        }).then(() => this.setState({todos: this.state.todos})); // re-render
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                <div className="todos">
                    {this.state.todos.map((todo) => this.renderTodo(todo))}
                </div>
            </div>
        )
    }

    renderTodo(todo) {
        return <div className="todo" key={todo.id}>
            <Checkbox inline onChange={this.todoChecked.bind(this, todo)} checked={todo.done}/>
            {todo.value}
        </div>
    }


}