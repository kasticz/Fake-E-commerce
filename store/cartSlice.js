import { createSlice } from "@reduxjs/toolkit";

const mouse = {
    price: 2399,
    title: 'SteelSeries Rival 3',
    image: "/mouses/SteelSeriesRival3.webp",
    id:1,
    amount: 1,
    warrantryStatus: false
}

const monitor ={
        title: 'Philips 27" 276E8VJSB/00',
        price: 22999,
        id: 54,       
        image:"/mns/Philips27276E8VJSB00.webp",
        amount: 1,
        warrantryStatus: false
}

       


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState : [mouse,monitor],
    reducers:{
        addToCart(state,payload){
            state.push(payload.payload)
        },
        setProductAmount(state,payload){
            const id = payload.payload.id
            const amount = payload.payload.amount
            state.find(item=>item.id === id).amount = amount
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