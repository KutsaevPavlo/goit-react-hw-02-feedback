import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  neutralIncrement = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  badIncrement = () => {
    this.setState(prevState => {
      return { bad: prevState.neutral + 1 };
    });
  };

  Total = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = total => {
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    return (
      <div>
        <h3>Please leave the feedback</h3>
        <div>
          <button className="" onClick={this.goodIncrement}>
            Good
          </button>
          <button className="" onClick={this.neutralIncrement}>
            Neutral
          </button>
          <button className="" onClick={this.badIncrement}>
            Bad
          </button>
        </div>
        <h3>Statistics</h3>
        <div>
          <p>
            Good: <span>{this.state.good}</span>
          </p>
          <p>
            Neutral: <span>{this.state.neutral}</span>
          </p>
          <p>
            Bad: <span>{this.state.bad}</span>
          </p>
          <p>
            Total: <span>{this.Total()}</span>
          </p>
          <p>
            Positice Feedback:{' '}
            <span>{this.countPositiveFeedbackPercentage(this.Total())}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;

// onClick={() => {
//     onLeaveFeedback(option);
//   }}
