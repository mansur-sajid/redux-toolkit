import { createSlice } from "@reduxjs/toolkit";

const initial = {
    noOfCakes : 20
}

const cakeSlice = createSlice({
    name : "cake",
    initialState: initial,
    reducers : {
        buy : (state, action)=>{
            state.noOfCakes -= action.payload
        },
        reStockd : (state)=>{
            state.noOfCakes = 20
        }
    }
})

export default cakeSlice.reducer
export const {buy, reStockd} = cakeSlice.actions