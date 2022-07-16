import axios from 'axios';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
} from 'redux/todos/todos-actions';

axios.defaults.baseURL = 'https://62c6dc952b03e73a58d905e0.mockapi.io';

const addTodo = text => dispatch => {
  const todo = { text, completed: false };

  dispatch(addTodoRequest);
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

const operations = { addTodo };
export default operations;
