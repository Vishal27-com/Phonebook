import { createSlice } from "@reduxjs/toolkit";
const initialState={
    contacts:[],
    filter:"all",
    search:"",
}
const phonebookSlice=createSlice({
    name:"phonebook",
    initialState,
    reducers:{
    addContact:(state,action)=>{
        state.contacts=[...state.contacts,action.payload]
    },
    editContact:(state,action)=>{
        state.contacts=state.contacts.map((item,ind)=>
        ind===action.payload.id?{...item,...action.payload.contact}:item
        )
    },
    deleteContact:(state,action)=>{
       state.contacts=state.contacts.filter((item)=>
       (item.name!==action.payload.name && item.phone!==action.payload.phone)
       )
    },
    bookmarkContact:(state,action)=>{
       state.contacts=state.contacts.map((item)=>
       (item.name===action.payload.name && item.phone===action.payload.phone)?{...item,isBookmarked:!item.isBookmarked}:item
       )
    },
    filterContact:(state,action)=>{
        state.filter=action.payload;
    },
    searchContact:(state,action)=>{
        state.search=action.payload;
    }
   
    }
})
export const {addContact,deleteContact,bookmarkContact,filterContact,editContact,searchContact}=phonebookSlice.actions;
export default phonebookSlice.reducer