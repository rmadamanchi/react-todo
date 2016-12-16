import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import classnames from 'classnames';

export default class Header extends React.Component {
    componentWillMount() {

    }

    render() {
        let homeClasses = classnames({'active': this.props.active === 'home'});
        let dashboardClasses = classnames({'active': this.props.active === 'dashboard'});

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">React Todo</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem className={homeClasses} href="/">Home</NavItem>
                    <NavItem className={dashboardClasses} href="/dashboard.html">Dashboard</NavItem>
                </Nav>
            </Navbar>
        )
    }

    static get propTypes() {
        return {
            active: React.PropTypes.string
        };
    }

}