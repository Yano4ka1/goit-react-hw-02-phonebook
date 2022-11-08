import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<div className={style.btnContainer}>
        {options.map(option => {
            return (<button type="button"
            onClick={()=>onLeaveFeedback(option)}
            key={option}>{option}</button>)
        })}

    </div>)
}

FeedbackOptions.porpTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}