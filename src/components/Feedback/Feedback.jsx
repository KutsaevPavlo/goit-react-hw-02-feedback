import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  render() {
    return (
      <div>
        <h3>Please leave the feedback</h3>
        <div>
          <button className="" onClick={this.handleIncrement}>
            Good
          </button>
          <button>Neutral</button>
          <button>Bad</button>
        </div>
        <h3>Statistics</h3>
        <div>
          <p>
            Good:<span>{this.state.good}</span>
          </p>
          <p>
            Neutral:<span></span>
          </p>
          <p>
            Bad:<span></span>
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
