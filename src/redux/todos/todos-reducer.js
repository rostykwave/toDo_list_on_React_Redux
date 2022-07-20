import { combineReducers } from 'redux';
import {
  // fetchTodosRequest,
  // fetchTodosSuccess,
  // fetchTodosError,
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
  changeFilter,
} from './todos-actions';
import { createReducer } from '@reduxjs/toolkit';
import { fetchTodos } from 'redux/todos/todos-operations';

const items = createReducer([], {
  [fetchTodos.fulfilled]: (_, { payload }) => payload,
  // [fetchTodosSuccess]: (_, { payload }) => payload,
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  // [actions.addTodo]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
});

const loading = createReducer(false, {
  [fetchTodos.pending]: () => true,
  [fetchTodos.fulfilled]: () => false,
  [fetchTodos.rejected]: () => false,
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedError]: () => false,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
const error = createReducer(null, {
  [fetchTodos.rejected]: (_, action) => action.payload,
  [fetchTodos.pending]: () => null,
  [addTodoError]: (_, action) => action.payload,
  [addTodoRequest]: () => null,
  [deleteTodoError]: (_, action) => action.payload,
  [deleteTodoRequest]: () => null,
  [toggleCompletedError]: (_, action) => action.payload,
  [toggleCompletedRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
