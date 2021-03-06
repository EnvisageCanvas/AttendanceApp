import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//Render the template onto the div 
ReactDOM.render(jsx, document.getElementById('root'));    