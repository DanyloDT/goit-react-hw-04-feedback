import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedback_list}>
      {options.map(item => {
        return (
          <li key="item">
            <button
              className={css.feedback_btn}
              type="button"
              onClick={() => {
                onLeaveFeedback(item);
              }}
            >
              {item}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
