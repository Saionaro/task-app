function setState(state, newState) {
   return newState;
}

function addTask(state, data) {
   let newState = Object.assign({}, state);
   newState.tasksStore[newState.tasksList.length + 2] = newState.tasksStore[1];
   newState.tasksList.push(newState.tasksList.length + 2);
   return newState;
}

function setShowed(state, id) {
   let newState = Object.assign({}, state);
   newState.tasksStore[id].showed = !newState.tasksStore[id].showed;
   return newState;
}

export default function(state = {}, action) {
   switch (action.type) {
      case 'SET_STATE':
         return setState(state, action.state);
      case 'OPEN_TASK':
         return addTask(setShowed(state, action.id));
      case 'CLOSE_TASK':
         return state;
      case 'CLOSE_TASK':
         return state;
      default:
         return state;
   }
}