import { createSelector } from "reselect";

const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getTotal = (state) => state.contacts.total;

const getVisibleContacts = createSelector(
    [getFilter, getContacts],
    (filter, contacts) => {
        const normalizedContact = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContact));
    }
);

export {
    getContacts,
    getFilter,
    getTotal,
    getVisibleContacts,
};