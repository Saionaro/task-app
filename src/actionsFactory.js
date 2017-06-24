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
};

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

export function executeTask(id, text) {
   return {
      type: actionsLib.EXECUTE_TASK,
      data: {
         id,
         text
      }
   };
}

export function closeModal(id) {
   return {type: actionsLib.CLOSE_MODAL, id};
};

export function showAlert(text) {
   return {
      type: actionsLib.OPEN_MODAL,
      data: {
         type: 'alert',
         text
      }
   };
}

export function newTask() {
   return {
      type: actionsLib.OPEN_MODAL,
      data: {
         type: 'new_task'
      }
   };
}

export function addTask(data) {
   return {type: actionsLib.ADD_TASK, data};
};

export function newProject() {
   return {
      type: actionsLib.OPEN_MODAL,
      data: {
         type: 'new_project'
      }
   };
}

export function addProject(data) {
   return {type: actionsLib.ADD_PROJECT, data};
};

export function searchUser(chooserId, text) {
   return (dispatch, getState) => {
      dispatch({
         type: actionsLib.PERFORM_SEARCH_USER,
         id: chooserId
      });
      setTimeout(_ => {
         let state = getState(),
            userStore = state.user.usersStore,
            filtred = text ? Object.keys(userStore).filter(id => {
               return (userStore[id].nickname + userStore[id].name).toLowerCase().match(text.toLowerCase());
            }) : [];
         dispatch({
            type: actionsLib.SEARCH_USER,
            id: chooserId,
            entities: filtred
         });
      }, 400);
   };
};

export function selectUser(chooserId, userId) {
   return {type: actionsLib.SELECT_USER,
      userId,
      chooserId
   };
}

export function clearUserSuggest(chooserId) {
   return {type: actionsLib.CLEAR_USER_SUGGEST,
      chooserId
   };
}

export function searchProject(chooserId, text) {
   return (dispatch, getState) => {
      dispatch({
         type: actionsLib.PERFORM_SEARCH_PROJECT,
         id: chooserId
      });
      setTimeout(_ => {
         let state = getState(),
            projectStore = state.project.projectsStore,
            filtred = text ? Object.keys(projectStore).filter(id => {
               return (projectStore[id].title + projectStore[id].description).toLowerCase().match(text.toLowerCase());
            }) : [];
         dispatch({
            type: actionsLib.SEARCH_PROJECT,
            id: chooserId,
            entities: filtred
         });
      }, 400);
   };
};

export function selectProject(chooserId, projectId) {
   return {type: actionsLib.SELECT_PROJECT,
      projectId,
      chooserId
   };
}

export function clearProjectSuggest(chooserId) {
   return {type: actionsLib.CLEAR_PROJECT_SUGGEST,
      chooserId
   };
}

export function markTab(tab) {
   return {type: actionsLib.MARK_TAB,
      tab
   };
}