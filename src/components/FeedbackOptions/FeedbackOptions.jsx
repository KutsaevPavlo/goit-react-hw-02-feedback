import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className=""
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
