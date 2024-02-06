import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import { Notification } from "./Statistics/Notification";

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  }

  addFeedback = feedback => {
    this.setState({
      [feedback]: this.state[feedback] + 1,
    })
  }
  
  countTotalFeedback() {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  }

  countPositiveFeedbackPercentage() {
    const { Good, Neutral, Bad } = this.state;
    return (Good * 100)/(Good + Neutral + Bad)
  }

  render() {
    const { Good, Neutral, Bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics good={Good} neutral={Neutral} bad={Bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"></Notification>}
        </Section>
      </>
    )
  }
}