import { useSelector, useDispatch } from 'react-redux';
import todosOperations from '../../redux/todos/todos-operations';
// import { deleteTodo, toggleCompleted } from '../../redux/todos/todos-actions';
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoList.scss';
import { getVisibleTodos } from 'redux/todos/todos-selectors';

const TodoList = () => {
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();
  const onDeleteTodo = id => dispatch(todosOperations.deleteTodo(id));
  const onToggleCompleted = id => dispatch(todosOperations.toggleCompleted(id));

  return (
    <ul className="TodoList">
      {todos.map(({ id, text, completed }) => (
        <li
          key={id}
          className={classNames('TodoList__item', {
            'TodoList__item--completed': completed,
          })}
        >
          <Todo
            text={text}
            completed={completed}
            onToggleCompleted={() =>
              onToggleCompleted({ id, completed: !completed })
            }
            onDelete={() => onDeleteTodo(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
