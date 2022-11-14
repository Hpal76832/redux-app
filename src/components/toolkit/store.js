import { configureStore } from "@reduxjs/toolkit";
import {postReducer} from './counterSlice'

const store=configureStore({
    reducer:{
        posts:postReducer
    }
})


export default store;