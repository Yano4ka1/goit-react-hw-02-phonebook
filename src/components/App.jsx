import React, { Component } from "react";
import { Sections } from "./Sections/Sections";
import { Notification } from "./Notification/Notification";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

  onClick = stateName => {
    this.stateName((prevState) => ({
      [stateName]: prevState[stateName] + 1,
  }))
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback() * 100).toFixed(0);
  }

  render() {
    const options = Object.keys(this.state);
      return<>
          <Sections title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onClick} />
          </Sections>

          <Sections title="Statistics">
            {this.countTotalFeedback() === 0? <Notification message='No feedback given'/>: (<div>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}/>
                </div>)}
          </Sections>
      </>
}
}