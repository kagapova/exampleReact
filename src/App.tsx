import * as React from 'react';
import { withCookies } from 'react-cookie';

import AppRoutes from "./routes/AppRoutes";
import { store } from './store/configureStore';
import {authUser, setUserToken} from './action/user';
import {getCookie} from './utils/utils';

import { IUser } from "./types/user";

// styles
import './App.css';

function getSavedToken() {
    const token = getCookie("token") || '1';
    return token;
}

class App extends React.Component<IUser> {

  constructor(props) {

      super(props);

      const cookiesToken = getSavedToken();

      if(cookiesToken && cookiesToken !== null && cookiesToken !== ""){
        store.dispatch(setUserToken(cookiesToken));
        store.dispatch(authUser(cookiesToken));
      }
  }

  public render() {
    return (
        <AppRoutes/>
    );
  }
}

export default withCookies(App);
