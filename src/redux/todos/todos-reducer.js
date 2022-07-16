import { combineReducers } from 'redux';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodo,
  toggleCompleted,
  changeFilter,
} from './todos-actions';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  // [actions.addTodo]: (state, { payload }) => [...state, payload],
  [deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo
    ),
});

const loading = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
