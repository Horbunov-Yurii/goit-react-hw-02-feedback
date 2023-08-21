import css from "./Statistics.module.css"
import PropTypes from 'prop-types';

export const Statistics = ({good,neutral,bad,total,positivePercentage,}) => {
  return (
    <ul className={css.feedback__list}>
        <li className={css.feedback__item}>Good: {good}</li>
        <li className={css.feedback__item}>Neutral: {neutral}</li>
        <li className={css.feedback__item}>Bad: {bad}</li>
        <li className={css.feedback__item}>Total: {total}</li>
        <li className={css.feedback__item}>
        Positive feedback: {positivePercentage} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
