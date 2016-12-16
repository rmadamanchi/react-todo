import React from "react";
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import DashboardPage from "./DashboardPage.jsx";
import TodoListRoute from "./TodoListRoute.jsx";
import TodoAddRoute from "./TodoAddRoute.jsx";


export default class DashboardRouter extends React.Component {

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={DashboardPage}>
                    <IndexRedirect to="list" />
                    <Route path="list" component={TodoListRoute} />
                    <Route path="add" component={TodoAddRoute} />
                </Route>
            </Router>
        )
    }
}
