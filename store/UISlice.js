import { createSlice } from "@reduxjs/toolkit";


const UI = createSlice({
    name:'UI',
    initialState: {
        modalActive: false
    },
    reducers:{
        toggleModal(state){
            state.modalActive = !state.modalActive            
        }
    }
})
export const UIActions = UI.actions

export default UI