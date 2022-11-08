import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return <p>{message}</p>
}

Notification.porpTypes = {
    message: PropTypes.string.isRequired,
}