import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import { CookiesProvider } from 'react-cookie';

import App from './App';
import registerServiceWorker from "./registerServiceWorker";

import {store} from "./store/configureStore";

ReactDOM.render(
    <CookiesProvider>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </CookiesProvider>,
    document.getElementById("root") as HTMLElement
);
registerServiceWorker();
