export const FeedbackOptions = (options, onLeaveFeedback) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button type="button" onClick={() => onLeaveFeedback()}>
            {option}
          </button>
        );
      })}
      {/* <button type="button" onClick={this.handleGood}>
        Good
      </button>
      <button type="button" onClick={this.handleNeutral}>
        Neutral
      </button>
      <button type="button" onClick={this.handleBad}>
        Bad
      </button> */}
    </div>
  );
};
