import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { browserHistory } from 'react-router'
import contactsTable from './redux/reducer'
import routes from './routes';

const finalCreateStore = compose(applyMiddleware(thunkMiddleware))(createStore);
const store = finalCreateStore(contactsTable);

render(
    <Provider store={store}>
    <div>
        {routes(store, browserHistory)}
    </div>
    </Provider>
    , document.getElementById('root'));
