import { createAction } from '@reduxjs/toolkit';

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSucses');
const fetchContactsError = createAction('contacts/fetchContactsEror');

const postContactRequest = createAction('contacts/postContactRequest');
const postContactSuccess = createAction('contacts/postContactSuccess');
const postContactsError = createAction('contacts/postContactsError');

const deleteDataRequest = createAction('contacts/deleteDataRequest');
const deleteDataSuccess = createAction('contacts/deleteDataSuccess');
const deleteDataError = createAction('contacts/deleteDataError');

const setFilter = createAction('contacts/setFilter');

export {
    setFilter,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    postContactRequest,
    postContactSuccess,
    postContactsError,
    deleteDataRequest,
    deleteDataSuccess,
    deleteDataError
};