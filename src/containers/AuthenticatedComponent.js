import * as React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class AuthenticatedComponent extends React.Component{

    componentDidUpdate(){
        const {auth} = this.props.user;
        if(!auth){
            this.props.history.push('/login');
        }
    }

    render(){
        return this.props.user.auth ? this.props.children : null
    }
}

function mapStateToProps(state) {
    return{
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(AuthenticatedComponent));