import PropTypes from 'prop-types';
import s from '../Form/Form.module.css';
import { useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { getContacts } from '../contact-selectors';
import { setFilter } from '../../Redux/contacts/contact.actions';
import { postData } from '../../Redux/contacts/contactsOperations';


function Form({ setFilter, contacts }) {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const dispatch = useDispatch();

    const resetFormInput = () => {
        setName('');
        setPhoneNumber('');
    };

    const handleInputChange = (e) => {
        const type = e.currentTarget.name;
        const value = e.currentTarget.value;
        switch (type) {
            case 'name':
                setName(value)
                break;
            case 'phoneNumber':
                setPhoneNumber(value)
                break;
            default: alert('invalid type')
        };
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(name, phoneNumber);
        resetFormInput();
    };

    const isNameInList = (name) => contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase());

    const onFormSubmit = (name, number) => {
        if (isNameInList(name)) {
            setFilter('');
            return alert(`${name} is already in contacts`)
        };
        const contactData = {
            name,
            number
        }
        dispatch(postData(contactData))
        setFilter('');
    };
        
    return (
        <form className={s.form} onSubmit={onSubmit}>
            <label className={s.label}>Name
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            <label className={s.label}>Number
                <input
                    className={s.input}
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    />
            </label>
            <button className={s.btn} type="submit" >Add contact</button>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        contacts: getContacts(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (value) => dispatch(setFilter(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);

Form.propTypes = {
    setFilter: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }))
};