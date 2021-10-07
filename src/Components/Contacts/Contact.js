import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import {fetchData, deleteData} from '../../Redux/contacts/contactsOperations';
import { getTotal, getVisibleContacts } from '../contact-selectors';

function Contact({ total, visibleContacts }) {
    const dispatch = useDispatch();  

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch, total]);

    const onDeleteBtnClick = (e) => {
        dispatch(deleteData(e.currentTarget.id))
    };

    return (
        visibleContacts.map(({ name, number, id }) =>
            <li key={id}>{name}: {number} <button type='button' id={id} onClick={onDeleteBtnClick}>Delete</button></li>)
    );
};

const mapStateToProps = (state) => {
    return {
        visibleContacts: getVisibleContacts(state),
        total: getTotal(state)
    };
};

export default connect(mapStateToProps)(Contact)

Contact.propTypes = {
    visibleContacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })),
};