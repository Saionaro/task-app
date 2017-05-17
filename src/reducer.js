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
      date: '01.05.16 15:54',
      showed: false,
   };
   newState.tasksList.push(id);
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
         return setShowed(state, action.id);
      case 'ADD_TASK':
         return addTask(state, action.desc);
      case 'CLOSE_TASK':
         return state;
      default:
         return state;
   }
}