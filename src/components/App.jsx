import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = evt => {
    console.log('click on good', evt);
    this.setState(prevState => {
      console.log(prevState);
      return { good: prevState.good + 1 };
    });
  };

  handleNeutral = evt => {
    console.log('click on neutral', evt);
    this.setState(prevState => {
      console.log(prevState);
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleBad = evt => {
    console.log('click on bad', evt);
    this.setState(prevState => {
      console.log(prevState);
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {good} </p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
    );
  }
}
