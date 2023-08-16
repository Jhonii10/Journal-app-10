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

     },
     setSaving:(state,action)=>{

     },
     updateNote:(state,action)=>{

     },
     deteteNodeById:(state,action)=>{

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
    deteteNodeById,
    savingNewNote

  } = journalSlice.actions