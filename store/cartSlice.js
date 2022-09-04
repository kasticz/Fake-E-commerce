import { createSlice } from "@reduxjs/toolkit";


       


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers:{
        addToCart(state,payload){
            const id = payload.payload.id
            const item = state.find(item=>item.id === id)
            const amount = payload.payload.amount
            if(item){
                item.amount + amount > 20 ? item.amount = 20 : item.amount + amount 
            }else{
                state.push(payload.payload)
            }            
        },
        setProductAmount(state,payload){
            const id = payload.payload.id
            const amount = payload.payload.amount

            const item = state.find(item=>item.id === id).amount = amount
        },
        setWarrantry(state,payload){
            const id = payload.payload.id
            const wrStatus = payload.payload.status
            state.find(item=>item.id === id).warrantryStatus = wrStatus;
        },
        deleteFromCart(state,payload){
            const id = payload.payload
            const newState = state.filter(item=>item.id !== id)
            return newState
        }
    }
})


export const cartActions = cartSlice.actions

export default cartSlice