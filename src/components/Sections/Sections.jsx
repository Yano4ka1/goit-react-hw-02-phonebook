import style from './Sections.module.css'
import PropTypes from 'prop-types';

export const Sections = ({ title, children }) => {
    return <section className={style.container}>
        <h2>{title}</h2>
        {children}
    </section>
}

Sections.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
