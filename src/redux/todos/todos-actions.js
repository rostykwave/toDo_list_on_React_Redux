// import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');
// const addTodo = createAction('todos/add', text => ({
//   payload: {
//     id: nanoid(),
//     text,
//     completed: false,
//   },
// }));
export const deleteTodo = createAction('todos/delete');
export const changeFilter = createAction('todos/changeFilter');

export const toggleCompleted = createAction('todos/toggleCompleted');

// const actions = {
//   addTodoRequest,
//   addTodoSuccess,
//   addTodoError,
//   deleteTodo,
//   changeFilter,
//   toggleCompleted,
// };

// export default actions;
