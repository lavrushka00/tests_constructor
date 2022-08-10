import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./../../axios";


export const fetchTests = createAsyncThunk("http://localhost:3001/api/getAllUsersTests", async (params) => {
    const {data} =  await axios.post('/api/getAllUsersTests', {
        author_id: params
    })
    return data
})


const initialState = {
    data: [],
    status: "loading"
}


const testsSlice = createSlice({
    name: 'tests',
    initialState,
    extraReducers: {
        [fetchTests.pending]: (state) => {
            state.data = []
            state.status = "loading"
        },
        [fetchTests.fulfilled]: (state, action) => {
            state.data = action.payload
            state.status = "loaded"
        },
        [fetchTests.rejected]: (state, action) => {
            state.data = []
            state.status = "error"
        }
    }
})


//export const isTestSelector = state => Boolean(state.testsSlice.data)
export const tests = testsSlice.reducer