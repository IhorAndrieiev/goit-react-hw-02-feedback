import React from 'react';
import PropTypes from 'prop-types';
import{Button} from './FeedbackOptions.styles'
import { Container } from './FeedbackOptions.styles'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Container>
    {options.map(option => (
      <Button
        
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </Button>
    ))}
  </Container>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};