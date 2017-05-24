import Moment from 'moment';

function setState(state, newState) {
   return newState;
}

function addTask(state, descr) {
   let newState = Object.assign({}, state);
   const id = newState.tasksList.length + 2;
   newState.tasksStore[id] = {
      id: id,
      title: descr,
      description: descr,
      createDate: new Moment(),
      showed: false,
      executor: newState.currentUser
   };
   newState.tasksList.push(id);
   return newState;
}

function setShowed(state, id) {
   let newState = Object.assign({}, state);
   newState.tasksStore[id].showed = !newState.tasksStore[id].showed;
   return newState;
}

function openTask(state, id) {
   let newState = Object.assign({}, state);
   newState.currentTask = id;
   return newState;
}

function closeTask(state) {
   let newState = Object.assign({}, state);
   newState.currentTask = null;
   return newState;
}

export default function(state = {}, action) {
   switch (action.type) {
      case 'SET_STATE':
         return setState(state, action.state);
      case 'OPEN_TASK':
         return openTask(setShowed(state, action.id), action.id);
      case 'CLOSE_TASK':
         return closeTask(state);
      case 'ADD_TASK':
         return addTask(state, action.desc);
      default:
         return state;
   }
}