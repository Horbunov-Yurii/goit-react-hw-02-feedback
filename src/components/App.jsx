import { Component } from "react";

export class App extends Component {
   state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState)=>({ 
      [option]: prevState[option]+1

    }))
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, item)=> acc + item,0)
   
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const {good} = this.state
    return Math.round(good / total * 100); 
  }

  render() {
    
    const total = this.countTotalFeedback()
    
    const percent = this.countPositiveFeedbackPercentage()
    console.log(percent)
   
    return (
      <div>
        <h2 className="Feedback__title">Please leave feedback</h2>
        <div>
          <button
            type="button"
            className="Feedback__btn"
            onClick={() => this.onLeaveFeedback('good')}
          >
            Good
          </button>
          <button
            type="button"
            className="Feedback__btn"
            onClick={() => this.onLeaveFeedback('neutral')}
          >
            Neutral
          </button>
          <button
            type="button"
            className="Feedback__btn"
            onClick={() => this.onLeaveFeedback('bad')}
          >
            Bad
          </button>
        </div>
        <h3 className="Feedback__statistics">Statistics</h3>
        {total > 0 ? (
          <ul className="Feedback__list">
            <li className="Feedback__item">Good: {this.state.good}</li>
            <li className="Feedback__item">Neutral: {this.state.neutral}</li>
            <li className="Feedback__item">Bad: {this.state.bad}</li>
            <li className="Feedback__item">Total: {total}</li>
            <li className="Feedback__item">Positive feedback: {percent} %</li>
          </ul>
        ) : (
          <p>No Feedback </p>
        )}
      </div>
    );
  }
};
