import { createSlice } from "@reduxjs/toolkit";


const UI = createSlice({
    name:'UI',
    initialState: {
        modalActive: false,
        login: ''
    },
    reducers:{
        toggleModal(state,payload){
            const modalType = payload.payload
            state.modalActive = modalType           
        },
        setLogin(state,payload){
            state.login = payload.payload
        }
    }
})
export const UIActions = UI.actions

export default UI