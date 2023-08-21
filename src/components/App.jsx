import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";


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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={percent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
};
