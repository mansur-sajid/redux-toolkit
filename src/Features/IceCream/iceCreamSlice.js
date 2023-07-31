import { createSlice } from "@reduxjs/toolkit";

const initial = {
    noOfIce : 10
}

const iceSlice = createSlice({
    name : "ice",
    initialState: initial,
    reducers : {
        ibuy : (state, action)=>{
            state.noOfIce -= action.payload
        },
        ireStockd : (state)=>{
            state.noOfIce = 10
        }
    }
})

export default iceSlice.reducer
export const {ibuy, ireStockd} = iceSlice.actions