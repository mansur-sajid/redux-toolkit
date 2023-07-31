import { configureStore } from "@reduxjs/toolkit";
import  cakeReducer  from '../Features/Cake/cakeSlice'
import iceReducer from '../Features/IceCream/iceCreamSlice'


const store = configureStore({
    reducer: {
        cake : cakeReducer,
        ice : iceReducer
    }
})

export default store