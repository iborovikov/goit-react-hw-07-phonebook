import { configureStore } from "@reduxjs/toolkit";
import contactsReduser from "./contacts/contact.redusers";

const store = configureStore({
  reducer: {
    contacts: contactsReduser
  },
  devTools: process.env.NODE_ENV === 'development'
});

export { store };