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
