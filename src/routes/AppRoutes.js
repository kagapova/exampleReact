import * as React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import AuthenticatedComponent from '../containers/AuthenticatedComponent';

import Home from '../pages/Home';
import Login from '../pages/Login';

class AppRoutes extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Switch>
                <Route path='/login' component={Login}/>
                <AuthenticatedComponent>
                    <Route exact path='/' component={Home} />
                </AuthenticatedComponent>
                <Redirect to='/' />
            </Switch>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
    }
}

export default withRouter(connect(mapStateToProps)(AppRoutes));