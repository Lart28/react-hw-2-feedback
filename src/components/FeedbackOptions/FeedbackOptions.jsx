import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div> 
    {options.map(option => <Button key={option} type='button' onClick={()=> onLeaveFeedback(option)}>{option}</Button>)}
      </div>
)

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

export default FeedbackOptions;