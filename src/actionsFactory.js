import * as actionsLib from './constants/actions';

export function openProject(id) {
   return dispatch => {
      dispatch({
         type: actionsLib.OPEN_MODAL,
         data: {
            type: 'project',
            id: id
         }
      });
   };
}

export function closeProject(id) {
   return dispatch => {
      dispatch({
         type: actionsLib.CLOSE_MODAL,
         data: {
            type: 'project',
            id: id
         }
      });
   }
};

export function openTask(id) {
   return dispatch => {
      dispatch({
         type: actionsLib.SET_TASK_SHOWED,
         id: id
      });
      dispatch({
         type: actionsLib.OPEN_MODAL,
         data: {
            type: 'task',
            id: id
         }
      });
   };
};

export function closeModal(id) {
   return {type: actionsLib.CLOSE_MODAL, id};
};

export function addTask(desc) {
   return {type: actionsLib.ADD_TASK, desc};
};