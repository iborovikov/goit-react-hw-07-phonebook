import { fetchContacts, postContact, deleteContact } from '../../services';
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchData = createAsyncThunk('contacts/fetchContacts',
    async () => {
        return await fetchContacts();
    }
);
const postData = createAsyncThunk('contacts/postContact',
    async (contactData) => {
        return await postContact(contactData)
    }
);
const deleteData = createAsyncThunk('contacts/deleteContact',
    async (id) => {
        return await deleteContact(id)
    }
);

export { fetchData, postData, deleteData };