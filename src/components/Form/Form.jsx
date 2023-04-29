import PropTypes from 'prop-types';

import css from './Form.module.css';

export const Form = ({ submit }) => {
    return <form
        className={css.form}
        onSubmit={submit}
    >
        <label className={css.label} htmlFor="name">Name</label>
        <input
            className={css.input}
            type="text"
            name="name"
            id='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        <label className={css.label} htmlFor="number">Number</label>
        <input
            className={css.input}
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <button className={css.button} type='submit'>Add contact</button>
    </form>
};

Form.propTypes = {
    submit: PropTypes.func.isRequired,
}