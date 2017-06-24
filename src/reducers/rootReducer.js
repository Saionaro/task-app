import {
   combineReducers
} from 'redux';
import task from './task';
import user from './user';
import project from './project';
import modal from './modal';
import general from './general';

export default combineReducers({
   task,
   user,
   project,
   modal,
   general
});