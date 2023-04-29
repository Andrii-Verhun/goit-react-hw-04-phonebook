import PropTypes from 'prop-types';

import css from './Contact.module.css';

export const Contact = ({ name, number, click, id }) => {
    return (
        <li className={css.item}>
            <p className={css.contact}>{name}: {number}</p>
            <button
                className={css.button}
                onClick={click}
                type='button'
                id={id}
            >Delete
            </button>
        </li>
    )
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
}