export const OPEN_TASK = 'OPEN_TASK';
export const CLOSE_TASK = 'CLOSE_TASK';
export const ADD_TASK = 'ADD_TASK';

export function openTask(id) {
   return {type: OPEN_TASK, id};
}

export function addTask(desc) {
   return {type: ADD_TASK, desc};
}

export function closeTask(id) {
   return  {type: CLOSE_TASK, index};
}