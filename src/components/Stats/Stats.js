import { useSelector } from 'react-redux';
import { todosSelectors } from 'redux/todos';
import './Stats.scss';

const Stats = () => {
  const total = useSelector(todosSelectors.getTotal);
  const completed = useSelector(todosSelectors.getCompleted);
  return (
    <div className="Stats">
      <p className="Stats__item">
        <span className="Stats__value">{total}</span>
        <span className="Stats__label">All</span>
      </p>
      <p className="Stats__item">
        <span className="Stats__value">{completed}</span>
        <span className="Stats__label">Done</span>
      </p>
    </div>
  );
};

export default Stats;
