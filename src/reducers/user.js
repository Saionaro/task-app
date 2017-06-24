import {
   PERFORM_SEARCH_USER,
   SEARCH_USER,
   SELECT_USER,
   CLEAR_USER_SUGGEST
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

const setSearchUserResult = (state, data) => {
   let newState = Object.assign({}, state),
      chooserData = newState.choosers[data.id];
   newState.choosers[data.id] = {
      pending: false,
      entities: data.entities,
      selected: chooserData ? chooserData.selected : null
   };
   return newState;
};

const setSelectedUser = (state, data) => {
   let newState = Object.assign({}, state);
   newState.choosers[data.chooserId] = {
      pending: false,
      entities: [],
      selected: data.userId
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

export default function(state = {}, action) {
   switch (action.type) {
      case PERFORM_SEARCH_USER:
         return setChooserPending(state, action.id);
      case SEARCH_USER:
         return setSearchUserResult(state, action);
      case SELECT_USER:
        return setSelectedUser(state, action);
      case CLEAR_USER_SUGGEST:
         return clearSuggest(state, action.chooserId);
      default:
         return state;
   }
}