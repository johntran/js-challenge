import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import contactsTable from './redux/reducer'
//const store = createStore(contactsTable);

const finalCreateStore = compose(applyMiddleware(thunkMiddleware))(createStore)
const store = finalCreateStore(contactsTable)
render(
    <Provider store={store}>
    <AppContainer />
    </Provider>
    , document.getElementById('root'));
