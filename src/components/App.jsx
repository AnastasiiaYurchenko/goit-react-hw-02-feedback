import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // const btnLabels = Object.keys(this.state);

  handleGood = evt => {
    console.log('click on good', evt);
    this.setState(prevState => {
      // console.log(prevState);
      console.log(Object.keys(this.state));
      return { good: prevState.good + 1 };
    });
  };

  // LeaveFeedback = () => {
  //   this.setState(prevState => {
  //     // console.log(prevState);
  //     console.log(Object.keys(this.state));
  //     return { [option]: this.state[option] + 1 };
  //   });
  // };

  handleNeutral = evt => {
    console.log('click on neutral', evt);
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleBad = evt => {
    console.log('click on bad', evt);
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    const result = Math.round((this.state.good / totalFeedback) * 100);
    // console.log(result);
    if (isNaN(result)) {
      return 0;
    }
    return result;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>

        {/* <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.LeaveFeedback}
        /> */}

        <div>
          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
