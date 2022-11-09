import PropTypes from 'prop-types';
import style from './Filter.module.css';

export const Filter = ({ onFilter }) => {
    return <label> Find contact by name
        <input className={style.filterInput} type="text" onInput={onFilter} />
    </label>
}


Filter.propTypes = {
    onFilter: PropTypes.func.isRequired,
}