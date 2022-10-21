import { configureStore } from "@reduxjs/toolkit";
import   userSlice  from "./ReducerSlicers/UserSlice";
export default configureStore({
    reducer :{
        User : userSlice
        
    }
})