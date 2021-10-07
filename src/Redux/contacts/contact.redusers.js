import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    setFilter,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    postContactSuccess,
    postContactRequest,
    postContactsError,
    deleteDataRequest,
    deleteDataSuccess,
    deleteDataError
} from './contact.actions';

const items = createReducer([], {
    [fetchContactsSuccess]: (state, action) => action.payload,
});
const filter = createReducer('', {
    [setFilter]: (_, action) => action.payload
});
const isLoading = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [postContactRequest]: () => true,
    [postContactSuccess]: () => false,
    [postContactsError]: () => false,
    [deleteDataRequest]: () => true,
    [deleteDataSuccess]: () => false,
    [deleteDataError]: () => false,
});
const total = createReducer(0, {
    [postContactSuccess]: (state) => state + 1,
    [deleteDataSuccess]: (state) => state - 1,
})
const contactsReduser = combineReducers({
    items,
    filter,
    isLoading,
    total
});
export default contactsReduser;