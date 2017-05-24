import React from 'react';
import ReactDOM from 'react-dom';
import {
   createStore,
   combineReducers
} from 'redux';
import {
   Provider
} from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import {
   BrowserRouter as Router,
   Route
} from 'react-router-dom';
import App from './components/App/App';
import reducer from './reducer';
import fakeData from './fakeStoreData';
import './index.less';

const store = createStore(combineReducers({
   reducer
}));

store.dispatch({
   type: 'SET_STATE',
   state: fakeData
});

ReactDOM.render(
   <Provider store={ store }>
      <Router history={ createHistory() }>
         <Route path='/' component={App} />
      </Router>
   </Provider>
   ,
   document.getElementById('app')
);