import {
   PERFORM_SEARCH_USER,
   SEARCH_USER,
   SELECT_USER
} from '../constants/actions';

const setChooserPending = (state, id) => {
   let newState = Object.assign({}, state),
      chooserData = newState.choosers[id];
   newState.choosers[id] = {
      pending: true,
      persons: chooserData ? chooserData.persons : [],
      selected: chooserData ? chooserData.selected : null,
   };
   return newState;
};

const setSearchUserResult = (state, data) => {
   let newState = Object.assign({}, state),
      chooserData = newState.choosers[data.id];
   newState.choosers[data.id] = {
      pending: false,
      persons: data.persons,
      selected: chooserData ? chooserData.selected : null
   };
   return newState;
};

const setSelectedUser = (state, data) => {
   let newState = Object.assign({}, state);
   newState.choosers[data.chooserId] = {
      pending: false,
      persons: [],
      selected: data.userId
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
      default:
         return state;
   }
}