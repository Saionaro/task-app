import {
   SEARCH_USER_PENDING,
   SEARCH_USER
} from '../constants/actions';

const setChooserPending = (state, id) => {
   return state;
};

const setSearchUserResult = (state, id) => {
   return state;
};

export default function(state = {}, action) {
   switch (action.type) {
      case SEARCH_USER_PENDING:
         return setChooserPending(state, action.id);
      case SEARCH_USER:
         return setSearchUserResult(state, action.data);
      default:
         return state;
   }
}