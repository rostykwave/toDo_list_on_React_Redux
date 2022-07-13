import { useSelector } from 'react-redux';
import { getCompleted, getTotal } from 'redux/todos/todos-selectors';
import './Stats.scss';

const Stats = () => {
  const total = useSelector(getTotal);
  const completed = useSelector(getCompleted);
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
