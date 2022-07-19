import { todosSelectors, todosActions } from 'redux/todos';
import { useSelector, useDispatch } from 'react-redux';
import './TodoFilter.scss';

const TodoFilter = () => {
  const value = useSelector(todosSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(todosActions.changeFilter(e.target.value));

  return (
    <div className="TodoFilter">
      <p className="TodoFilter__label">Filter</p>
      <input
        type="text"
        className="TodoFilter__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default TodoFilter;
