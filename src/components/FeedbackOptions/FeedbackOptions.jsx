import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onGood, onNeutral, onBad }) => (
      <div> 
        <Button type='button' onClick={onGood}>Good</Button>
        <Button type='button' onClick={onNeutral}>Neutral</Button>
        <Button type='button' onClick={onBad}>Bad</Button>
      </div>
)

FeedbackOptions.propTypes = {
  onGood: PropTypes.func,
  onNeutral: PropTypes.func,
  onBad: PropTypes.func,
}

export default FeedbackOptions;