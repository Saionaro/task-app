import React from 'react';
import ReactDOM from 'react-dom';
import {
   createStore,
   applyMiddleware
} from 'redux';
import {
   Provider
} from 'react-redux';
import {
   createLogger
} from 'redux-logger';
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {
   BrowserRouter as Router,
   Route
} from 'react-router-dom';
import App from './components/App/App';
import rootReducer from './reducers/rootReducer';
import fakeData from './initialStoreData';
import './index.less';

const store = createStore(rootReducer, fakeData, applyMiddleware(thunk, createLogger()));

ReactDOM.render(
   <Provider store={ store }>
      <Router history={ createHistory() }>
         <Route path='/' component={App} />
      </Router>
   </Provider>
   ,
   document.getElementById('app')
);