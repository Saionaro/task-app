import Moment from 'moment';
import {
   OPEN_TASK,
   SET_TASK_SHOWED,
   CLOSE_TASK,
   ADD_TASK
} from '../constants/actions';

const setState = (state, newState) => {
   return newState;
};

const addTask = (state, descr) => {
   let newState = Object.assign({}, state);
   const id = newState.tasksList.length + 1;
   newState.tasksStore[id] = {
      id: id,
      title: descr,
      description: descr,
      createDate: new Moment(),
      showed: false,
      executor: 0
   };
   newState.tasksList.push(id);
   return newState;
};

const setShowed = (state, id) => {
   let newState = Object.assign({}, state);
   newState.tasksStore[id].showed = true;
   return newState;
};

export default function(state = {}, action) {
   switch (action.type) {
      case 'SET_STATE':
         return setState(state, action.state);
      case SET_TASK_SHOWED:
         return setShowed(state, action.id);
      case ADD_TASK:
         return addTask(state, action.desc);
      default:
         return state;
   }
}