import './TodoFilter.scss';
import todosActions from '../../redux/todos/todos-actions';
import { getFilter } from 'redux/todos/todos-selectors';
import { useSelector, useDispatch } from 'react-redux';

const TodoFilter = () => {
  const value = useSelector(getFilter);
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
