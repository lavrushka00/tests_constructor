import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import axios from "axios";


import axios from "./../../axios";

export const fetchAuthMe = createAsyncThunk("http://localhost:3001/api/users/AuthMe", async () => {
    const {data} =  await axios.get('/api/users/AuthMe')
    return data
})



export const fetchAuth = createAsyncThunk("http://localhost:3001/api/users/login", async ( params) => {
    
  
    const {data} =  await axios.post('/api/users/login', params)
    return data
})





const initialState = {
    data: null,
    status: 'loading'
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.data = null
            state.status = "loading"
        },
        [fetchAuth.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.data = action.payload
            state.status = "loaded"
        },
        [fetchAuth.rejected]: (state, action) => {
            state.data = null
            state.status = "error"
        },
        [fetchAuthMe.pending]: (state) => {
            state.data = null
            state.status = "loading"
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            console.log(action.payload)
            state.data = action.payload
            state.status = "loaded"
        },
        [fetchAuthMe.rejected]: (state, action) => {
            state.data = null
            state.status = "error"
        }
    }
})


// export const isAuthSelector = state => {
   
    
    
//     if(state.auth.data === null) {
//         return {authorization: false, error: null}
//     }else if (state.auth.data.status == "200"){
//         return {authorization: true, error: false}
//     }else {
//         return {authorization: false, error: true}
//     }
// }

export const isAuthSelector = (state) => {
    console.log(state.auth.data)
    console.log(Boolean(state.auth.data) )
    return Boolean(state.auth.data) 
}


export const auth = authSlice.reducer