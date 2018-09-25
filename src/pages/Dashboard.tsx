import * as React from 'react';
import { connect } from 'react-redux';

import { IUser } from "../types/user";

class Dashboard extends React.Component<IUser>{

    constructor(props) {
        super(props);
    }

    public render(){
        return(
            <div>
                <h1>Dashboard page</h1>
                <p>Hello {this.props.first_name}  {this.props.last_name} !</p>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        auth: store.user.auth,
        first_name: store.user.first_name,
        last_name: store.user.last_name
    }
}

export default connect(mapStateToProps)(Dashboard);


