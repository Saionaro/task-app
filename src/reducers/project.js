import Moment from 'moment';
import {
   PERFORM_SEARCH_PROJECT,
   SEARCH_PROJECT,
   SELECT_PROJECT,
   CLEAR_PROJECT_SUGGEST,
   ADD_PROJECT
} from '../constants/actions';

const setChooserPending = (state, id) => {
   let newState = Object.assign({}, state),
      chooserData = newState.choosers[id];
   newState.choosers[id] = {
      pending: true,
      entities: chooserData ? chooserData.entities : [],
      selected: chooserData ? chooserData.selected : null,
   };
   return newState;
};

const setSearchProjectResult = (state, data) => {
   let newState = Object.assign({}, state),
      chooserData = newState.choosers[data.id];
   newState.choosers[data.id] = {
      pending: false,
      entities: data.entities,
      selected: chooserData ? chooserData.selected : null
   };
   return newState;
};

const setSelectedProject = (state, data) => {
   let newState = Object.assign({}, state);
   newState.choosers[data.chooserId] = {
      pending: false,
      entities: [],
      selected: data.projectId
   };
   return newState;
};

const clearSuggest = (state, chooserId) => {
   let newState = Object.assign({}, state),
      chooserData = newState.choosers[chooserId];
   newState.choosers[chooserId] = {
      pending: false,
      entities: [],
      selected: chooserData ? chooserData.selected : null
   };
   return newState;
};

const addProject = (state, data) => {
   let newState = Object.assign({}, state);
   const id = newState.projectsList.length + 1;
   newState.projectsStore[id] = {
      id: id,
      title: data.title,
      description: data.description,
      createDate: new Moment(),
      executionDate: null,
      author: 0,
      team: [],
      tasks: []
   };
   newState.projectsList.push(id);
   return newState;
};

export default function(state = {}, action) {
   switch (action.type) {
      case PERFORM_SEARCH_PROJECT:
         return setChooserPending(state, action.id);
      case SEARCH_PROJECT:
         return setSearchProjectResult(state, action);
      case SELECT_PROJECT:
         return setSelectedProject(state, action);
      case CLEAR_PROJECT_SUGGEST:
         return clearSuggest(state, action.chooserId);
      case ADD_PROJECT:
         return addProject(state, action.data)
      default:
         return state;
   }
}