/* eslint-disable no-unused-vars */
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";


export const startNewNote = ()=>{
    return async(dispatch, getState)=>{
        // uid 
        dispatch(savingNewNote())
        const {uid} = getState().auth
        
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const newDoc = doc(collection(firebaseDB,`${uid}/journal/notes`))
        await setDoc(newDoc,newNote)


       newNote.id = newDoc.id

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
        
}}


export const startLoadingNotes = ()=>{
    return async(dispatch,getState )=>{
        const {uid} = getState().auth;
        if(!uid) throw new Error('el uid no existe ')
        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}


export const startSaveNote = ()=>{
    return async(dispatch, getState)=>{

        dispatch(setSaving())

        const {uid} = getState().auth;
        const {active: note} = getState().journal;
        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        const docRef = doc(firebaseDB,`${uid}/journal/notes/${note.id}`);
        await setDoc(docRef,noteToFirestore,{merge:true})

        dispatch(updateNote(note))
    }
}