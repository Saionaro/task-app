import {
   MARK_TAB
} from '../constants/actions';
import Generator from 'random-id';

const markActiveTab = (state, data) => {
   let newState = Object.assign({}, state);
   newState.activeTab = data.tab;
   return newState;
};

export default function(state = {}, action) {
   switch (action.type) {
      case MARK_TAB:
         return markActiveTab(state, action);
      default:
         return state;
   }
};