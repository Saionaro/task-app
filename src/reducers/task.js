import Moment from 'moment';
import {
   OPEN_TASK,
   SET_TASK_SHOWED,
   CLOSE_TASK,
   ADD_TASK,
   EXECUTE_TASK
} from '../constants/actions';

const setState = (state, newState) => {
   return newState;
};

const addTask = (state, data) => {
   let newState = Object.assign({}, state);
   const id = newState.tasksList.length + 1;
   newState.tasksStore[id] = {
      id: id,
      title: data.title,
      description: data.description,
      createDate: new Moment(),
      showed: false,
      executor: data.exec,
      project: data.project || null,
      author: 0,
      executionDate: null,
      executionText: null
   };
   newState.tasksList.push(id);
   return newState;
};

const setShowed = (state, id) => {
   let newState = Object.assign({}, state);
   newState.tasksStore[id].showed = true;
   return newState;
};

const executeTask = (state, data) => {
   let newState = Object.assign({}, state),
      currentTask = newState.tasksStore[data.id];
   currentTask.executionDate = new Moment();
   currentTask.executionText = data.text;
   return newState;
};

export default function(state = {}, action) {
   switch (action.type) {
      case 'SET_STATE':
         return setState(state, action.state);
      case SET_TASK_SHOWED:
         return setShowed(state, action.id);
      case ADD_TASK:
         return addTask(state, action.data);
      case EXECUTE_TASK:
         return executeTask(state, action.data);
      default:
         return state;
   }
}