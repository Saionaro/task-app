import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import TasksRegistry from './components/TasksRegistry/TasksRegistry';
import App from './components/App/App';

import './index.less';

import reducer from './reducer';

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(
   combineReducers({
      reducer,
      router: routerReducer
   }),
   applyMiddleware(middleware)
)

const tasksList = [1, 2];
const tasksStore = {
   1: {
      id: 1,
      title: 'Задача из славного города Ярославль',
      description: 'Делаем задание из славного города Ярославль',
      date: '01.05.16 15:30',
      showed: false,
      taskData: {
         id: 1,
         title: 'Задача из славного города Ярославль',
         description: 'Делаем задание из славного города Ярославль',
         date: '01.05.16 15:30',
         executor: {
            id: 123,
            photo: '/dist/pics/defaultPhoto.png',
            name: 'Укропов М.Ч.'
         },
         author: {
            id: 1232,
            photo: '/dist/pics/defaultPhoto.png',
            name: 'Белкин О.М.'
         }
      }
   }, 
   2: {
      id: 2,
      title: 'Задача из славного города Северогорск',
      description: 'Делаем задание из славного города Северогорск',
      date: '01.05.16 15:54',
      showed: false,
      taskData: {
         id: 2,
         title: 'Задача из славного города Северогорск',
         description: 'Делаем задание из славного города Северогорск',
         date: '01.05.16 15:54',
         executor: {
            id: 1233,
            photo: '/dist/pics/defaultPhoto.png',
            name: 'Васильев М.Д.'
         },
         author: {
            id: 122,
            photo: '/dist/pics/defaultPhoto.png',
            name: 'Колбаскин И.П.'
         }
      }
   }
};

store.dispatch({
   type: 'SET_STATE',
   state: {
      tasksList: tasksList,
      tasksStore: tasksStore,
      activeTaskData: {
         opened: false,
         id: null
      }
   }
});

store.dispatch(push('/tasks'))

ReactDOM.render(
   <Provider store={store}>
      <ConnectedRouter history={history}>
         <div>
            <Route exact path="/" component={App} />
            <Route path="/tasks" component={TasksRegistry} />
         </div>
      </ConnectedRouter>
   </Provider>,
   document.getElementById('app')
);