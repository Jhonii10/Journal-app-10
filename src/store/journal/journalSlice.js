/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState:{
     isSaving: false,
     MessageSave:'',
     notes:[],
     active:null,
    //  active:{
    //     id:'123455',
    //     title:'',
    //     body:'',
    //     date:123456,
    //     imageUrls:[]
    //  }
   },
   reducers: {
     addNewEmptyNote:(state,action)=>{
        state.notes.push(action.payload)
        state.isSaving = false
     },
     setActiveNote:(state,action)=>{
        state.active = action.payload
     },
     setNotes:(state,action)=>{
       state.notes = action.payload
       state.MessageSave = ''
     },
     setSaving:(state,action)=>{
       state.isSaving = true;
       state.MessageSave = ''
     },
     updateNote:(state,action)=>{
       state.isSaving = false;
       state.notes = state.notes.map(note =>{
        if(note.id === action.payload.id){
          return action.payload;
        }
        return note
       });

       state.MessageSave = 'Nota actualizada correctamente'
     },
     setPhotosToActiveNote: (state, action) => {
      state.active.imageUrl = [ ...state.active.imageUrl, ...action.payload ]; 
      state.isSaving = false;
     },
     clearNotesLogout:(state,action)=>{
        state.isSaving = false;
        state.MessageSave = '';
        state.notes=[];
        state.active = null;
     },


     deteteNoteById:(state,action)=>{
        state.active = null;
        state.notes = state.notes.filter(note => note.id !== action.payload)

     },
     savingNewNote:(state,action)=>{
        state.isSaving = true;
     },
  }
})

// Action creators are generated for each case reducer function
export const 
  { 
    
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deteteNoteById,
    savingNewNote,
    setPhotosToActiveNote,
    clearNotesLogout

  } = journalSlice.actions