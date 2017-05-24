import * as actionsLib from './constants/actions';

export function openTask(id) {
   return {type: actionsLib.OPEN_TASK, id};
}

export function addTask(desc) {
   return {type: actionsLib.ADD_TASK, desc};
}

export function closeTask() {
   return  {type: actionsLib.CLOSE_TASK};
}