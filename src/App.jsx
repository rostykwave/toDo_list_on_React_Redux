import { Modal } from 'components/Modal/Modal';
import { TodoEditor } from 'components/TodoEditor/TodoEditor';
// import { TodoFilter } from 'components/TodoFilter/TodoFilter';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { useModal } from 'hooks/useModal';

export const App = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      {/* <TodoFilter /> */}
      <button type="button" onClick={openModal}>
        Add
      </button>
      <ToDoList />
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <TodoEditor />
        </Modal>
      )}
    </>
  );
};
