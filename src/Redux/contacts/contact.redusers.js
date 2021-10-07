import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { setFilter } from './contact.actions';
import { fetchData, postData, deleteData } from './contactsOperations';

const items = createReducer([], {
    [fetchData.fulfilled]: (state, action) => action.payload,
});
const filter = createReducer('', {
    [setFilter]: (_, action) => action.payload
});
const isLoading = createReducer(false, {
    [fetchData.pending]: () => true,
    [fetchData.fulfilled]: () => false,
    [fetchData.rejected]: () => false,
    [postData.pending]: () => true,
    [postData.fulfilled]: () => false,
    [postData.rejected]: () => false,
    [deleteData.pending]: () => true,
    [deleteData.fulfilled]: () => false,
    [deleteData.rejected]: () => false,
});
const total = createReducer(0, {
    [postData.fulfilled]: (state) => state + 1,
    [deleteData.fulfilled]: (state) => state - 1,
})
const contactsReduser = combineReducers({
    items,
    filter,
    isLoading,
    total
});
export default contactsReduser;