import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import Todo from '../Todo';
import './TodoList.scss';
import { todosOperations, todosSelectors } from 'redux/todos';

const TodoList = () => {
  const todos = useSelector(todosSelectors.getVisibleTodos);
  const dispatch = useDispatch();
  const onDeleteTodo = id => dispatch(todosOperations.deleteTodo(id));
  const onToggleCompleted = id => dispatch(todosOperations.toggleCompleted(id));

  return (
    todos.length > 0 && (
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
    )
  );
};

export default TodoList;
