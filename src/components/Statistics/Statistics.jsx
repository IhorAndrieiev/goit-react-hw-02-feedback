import PropTypes from 'prop-types';
import { Container } from './Statistics.styles'
import{Paragraf} from './Statistics.styles'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <Container>
            <Paragraf>Good: {good}</Paragraf>
            <Paragraf>Neutral: {neutral}</Paragraf>
            <Paragraf>Bad: {bad}</Paragraf>
            <Paragraf>Total:{total}</Paragraf>
            <Paragraf>Positive feedback: {positivePercentage} %</Paragraf>
        </Container>
        
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};