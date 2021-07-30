import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions'
import { Statistics } from '../Statistics/Statistics'
import { Section } from '../Section/Section'
import { Notification} from '../Notification/Notification'
//import { Controls } from '../Controls/Controls'



export class Feedback extends Component {
  static defaultProps = {
      initialGood: 0,
      initialNeutral: 0,
      initialBad:0,
    };
    
    static propTypes = {
        initialGood: PropTypes.number.isRequired,
        initialNeutral: PropTypes.number.isRequired,
        initialBad: PropTypes.number.isRequired,
    };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };
    handleClick = (e) => {
    const name = e.target.name;
    this.setState((prevState) => ({
      ...prevState,
      [name]: this.state[name] + 1,
    }));
  };
    // handleClickGood = (e) => {
    //     this.setState(prevState => ({ good: prevState.good + 1 }));
    // };
    // handleClickNeutral = (e) => {
    //     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    // };
    // handleClickBad = (e) => {
    //     this.setState(prevState => ({ bad: prevState.bad + 1 }));
    // };

    countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100);
  };

    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
render() {
  const options = Object.keys(this.state);
 
    const { good, neutral, bad } = this.state;
    const feedbacksTotal = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
        return (
            <>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.handleClick}
                    />
                </Section>
                {/* <h1>
                    Please leave feedback
                </h1> */}
                 
                {/* <Controls
                    onClickGood={ this.handleClickGood}
                    onClickNeutral={this.handleClickNeutral }
                    onClickBad={this.handleClickBad}
                /> */}
                {/* <h2>Statistics</h2> */}
                <Section title={"Statistics"}>
                    {feedbacksTotal ? (<Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={ feedbacksTotal}
                    positivePercentage={positiveFeedbackPercentage}
                    />):(
            <Notification message={"No feedback given"} />
          )}
              {/* {feedbacksTotal&&(<Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={ feedbacksTotal}
                    positivePercentage={positiveFeedbackPercentage}
                    />)} */}
                </Section>
                
            </>
        )
    }
}