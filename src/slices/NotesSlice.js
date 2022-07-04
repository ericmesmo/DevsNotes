import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list:[
        {
            title: 'Primeira Alacanzan',
            body: 'Testando 1, 2, 3...'
        },
        {
            title: 'Segunda Nota',
            body: 'Testando 4, 5, 6...'
        }
    ]
};

const NoteSlice = createSlice({
    name:'NoteSlice',
    initialState,
    reducers:{
        addNote(state, action) {
            state.list.push({
                title: action.payload.title,
                body: action.payload.body
            })
        },
        editNote(state, action){
            if(state.list[action.payload.key]){
                state.list[action.payload.key] = {
                    title: action.payload.title,
                    body: action.payload.body
                }
            }
        },
        deleteNote(state, action){
            state.list.splice(action.payload, 1);
        }
    }
})

export const {addNote, editNote, deleteNote} = NoteSlice.actions;
export default NoteSlice.reducer;