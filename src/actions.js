export const OPEN_TASK = 'OPEN_TASK';
export const CLOSE_TASK = 'CLOSE_TASK';

export function openTask(id) {
   return {type: OPEN_TASK, id};
}

export function closeTask(id) {
   return  {type: CLOSE_TASK, index};
}