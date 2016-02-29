import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';
import App from './App';
import ContactsKeeperPageContainer from './Pages/ContactsKeeperPage/ContactsKeeperPage';

export default (store, history) => {

    /**
     * Please keep routes in alphabetical order
     */

    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={ContactsKeeperPageContainer} />
            </Route>
        </Router>
    );
}
