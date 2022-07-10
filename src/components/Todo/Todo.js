import IconButton from 'components/IconButton';
import { MdDelete } from 'react-icons/md';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    <IconButton
      onClick={onDelete}
      aria-label="Delete todo"
      className="IconButton onDelete"
    >
      <MdDelete size={25} fill="#fff" />
      {/* <AddIcon width="40" height="40" fill="#fff" /> */}
    </IconButton>
    {/* <button type="button" className="TodoList__btn" onClick={onDelete}>
      Delete
    </button> */}
  </>
);

export default Todo;
//MdDelete
