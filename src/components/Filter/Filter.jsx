import PropTypes from 'prop-types';

import css from './Filter.module.css';

export const Filter = ({filter, change}) => {
    return (
        <>
            <label className={css.label} htmlFor="filter">Find contacts by name</label>
            <input
                className={css.input}
                onChange={change}
                value={filter}
                type="text"
                name="filter"
                id='filter'
            />
        </>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
}