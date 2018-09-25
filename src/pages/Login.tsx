import * as React from 'react';
import { connect } from 'react-redux';
import {withRouter, RouteComponentProps} from 'react-router-dom';

class Login extends React.Component <any & RouteComponentProps<{}>, any>{

    constructor(props){
        super(props);
    }

    public componentDidUpdate(){
        if(this.props.user.auth && this.props.user.auth === true){
            this.props.history.push('/');
        }
    }

    public render(){
        return(
            <div>Login page</div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
    }
}

export default withRouter<any & RouteComponentProps<{}>>(connect(mapStateToProps)(Login));