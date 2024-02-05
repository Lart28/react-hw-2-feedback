import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import { Notification } from "./Statistics/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
      addGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  }

  addNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  }

  addBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  }
  
  countTotalFeedback(){
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good * 100)/(this.state.good + this.state.neutral + this.state.bad)
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onGood={this.addGoodFeedback} onNeutral={this.addNeutralFeedback} onBad={this.addBadFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"></Notification>}
        </Section>
      </>
    )
  }
}