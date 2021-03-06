import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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
} from 'redux/todos/todos-actions';

axios.defaults.baseURL = 'https://62c6dc952b03e73a58d905e0.mockapi.io';

// export const fetchTodos = () => async dispatch => {
//   dispatch(fetchTodosRequest());

//   try {
//     const { data } = await axios.get('/todos');
//     dispatch(fetchTodosSuccess(data));
//   } catch (error) {
//     dispatch(fetchTodosError(error));
//   }
// };

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest());
  //   dispatch({ type: 'todos/addTodoRequest' });

  axios
    .post('/todos', todo)
    .then(
      ({ data }) => dispatch(addTodoSuccess(data))
      //   dispatch({ type: 'todos/addTodoSuccess', payload: data })
    )
    .catch(error => dispatch(addTodoError(error)));
  // .catch(error => dispatch({ type: 'todos/addTodoError', payload: error }));
};

export const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};

export const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };
    dispatch(toggleCompletedRequest());

    axios
      .put(`/todos/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch(error => dispatch(toggleCompletedError(error)));
  };
