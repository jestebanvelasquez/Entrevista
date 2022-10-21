import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState:{
        data:[]
    },
    reducers: {
        getData : (state, action) => {
            state.data = action.payload
        }
    }
})

export const {getData} = userSlice.actions

export default userSlice.reducer