import React from "react";
import Header from "../common/Header.jsx";
import {Grid, Row, Col, Nav, NavItem} from "react-bootstrap";
import classnames from "classnames";
import "./DashboardPage.scss";

export default class DashboardPage extends React.Component {

    componentWillMount() {
        
    }

    render() {
        let route = this.props.location.pathname;

        let x = <div>test</div>;
        return (
            <div>
                <Header ref="header" active="dashboard"/>

                <Grid>
                    <Row>
                        <Col md={3} sm={4}>
                            {this.renderLeftNav(route)}
                        </Col>
                        <Col md={9} sm={8}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

    renderLeftNav(route) {
        return <Nav bsStyle="pills" stacked className="todo-left-nav">
            <NavItem href="#list" className={classnames(route === '/list' && 'active')}>List</NavItem>
            <NavItem href="#add" className={classnames(route === '/add' && 'active')}>Add</NavItem>
        </Nav>
    }

}