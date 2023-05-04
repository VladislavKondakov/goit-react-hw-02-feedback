import React from 'react';
import Statistics from './Statistics/statistics';
import FeedbackOptions from './FeedBack/feedback';
import Section from './Section/section';
import Notification from './Notification/notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    hasFeedback: false, 
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    return total ? Math.round((positive / total) * 100) : 0;
  };

  addGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
        hasFeedback: true, 
      };
    });
  };

  addNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
        hasFeedback: true, // обновляем флаг при добавлении обратной связи
      };
    });
  };

  addBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
        hasFeedback: true, // обновляем флаг при добавлении обратной связи
      };
    });
  };

  render() {
    const { good, neutral, bad, hasFeedback } = this.state;
    return (
      <div>
        <Section>
          <h2>Please leave feedback</h2>
        </Section>
        <Section>
          <FeedbackOptions
            clickGood={this.addGood}
            clickNeutral={this.addNeutral}
            clickBad={this.addBad}
          />
        </Section>
        {hasFeedback ? ( 
          <Section>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}
      </div>
    );
  }
}
