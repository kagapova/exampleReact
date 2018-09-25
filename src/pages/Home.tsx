import * as React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../pages/Dashboard';

class Home extends React.Component <any, any>{

    constructor(props){
        super(props);
    }

    public render(){
        return(
            <Dashboard />
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user
    }
}

export default connect(mapStateToProps)(Home);