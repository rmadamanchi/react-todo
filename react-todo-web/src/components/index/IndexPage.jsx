import React from "react";
import Header from "../common/Header.jsx";
import {Jumbotron, Button} from "react-bootstrap";

export default class HomePage extends React.Component {

    componentWillMount() {

    }

    render() {
        return (
            <div>
                <Header ref="Header" active="home"/>
                {this.renderJumbotron()}
            </div>
        )
    }

    renderJumbotron() {
        return <div className="container">
            <Jumbotron>
                <h1>React Todo</h1>
                <p>A simple Todo app built with React, Bootstrap, Webpack and Spring Boot.</p>
                <p><Button bsStyle="primary" href="/dashboard.html">Dashboard</Button></p>
            </Jumbotron>
        </div>;
    }

}