import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    postContactRequest,
    postContactSuccess,
    postContactsError,
    deleteDataRequest,
    deleteDataSuccess,
    deleteDataError
} from "./contact.actions";
import { fetchContacts, postContact, deleteContact } from '../../services';

const fetchData = () => async dispatch => {
    dispatch(fetchContactsRequest());
    try {
        const contacts = await fetchContacts();
        dispatch(fetchContactsSuccess(contacts));
    } catch (error) {
        dispatch(fetchContactsError(error));
    }
};
const postData = (contactData) => async dispatch => {
    dispatch(postContactRequest())
    try {
        await postContact(contactData)
        dispatch(postContactSuccess())
    } catch (error) {
        dispatch(postContactsError())
    }
};
const deleteData = (id) => async dispatch => {
    dispatch(deleteDataRequest())
    try {
        await deleteContact(id)
        dispatch(deleteDataSuccess())
    } catch (error) {
        dispatch(deleteDataError(error))
    }
};

export { fetchData, postData, deleteData };