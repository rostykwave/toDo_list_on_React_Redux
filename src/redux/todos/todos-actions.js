import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add', text => ({
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
}));
const deleteTodo = createAction('todos/delete');
const changeFilter = createAction('todos/changeFilter');

const toggleCompleted = createAction('todos/toggleCompleted');

const actions = { addTodo, deleteTodo, changeFilter, toggleCompleted };

export default actions;
