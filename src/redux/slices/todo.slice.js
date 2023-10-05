import {createSlice} from "@reduxjs/toolkit"
import { THUNK_STATUS } from "../../utils/constants/redux.constants"
import { getTodoAsyncThunk } from "../asyncThunk"


const initialState ={
    todos : null,
    todoStatus : null
}


export const TodoSlice = createSlice({
    name : "todo",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getTodoAsyncThunk.pending, (state, action)=>{
          state.todoStatus  = THUNK_STATUS.PENDING  
        })
        builder.addCase(getTodoAsyncThunk.fulfilled, (state, action)=>{
            state.todoStatus  = THUNK_STATUS.SUCCESS
            state.todos = action.payload.data
        })
        builder.addCase(getTodoAsyncThunk.rejected, (state, action)=>{
            state.todoStatus  = THUNK_STATUS.REJECTED
        })
    }
})


export default TodoSlice.reducer