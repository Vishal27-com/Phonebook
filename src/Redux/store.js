import { configureStore } from "@reduxjs/toolkit";
import phonebookReducer from "./phonebook.slice"
export const store=configureStore({
    reducer:{
        contact:phonebookReducer
    }
})