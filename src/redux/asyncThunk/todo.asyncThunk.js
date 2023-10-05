import { createAsyncThunk } from "@reduxjs/toolkit"
import { ASYNC_ROUTES } from "../../utils/constants/redux.constants"
import { createTodoService, deleteTodoService, getTodosService, updateTodoService } from "../services"

export const getTodoAsyncThunk = createAsyncThunk(ASYNC_ROUTES.GET_TODO, async (payload, { rejectWithValue }) => {
    try {
        return await getTodosService()
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteTodoAsyncThunk = createAsyncThunk(ASYNC_ROUTES.DELETE_TODO, async (payload, { rejectWithValue }) => {
    try {
        return await deleteTodoService(payload)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateTodoAsyncThunk = createAsyncThunk(ASYNC_ROUTES.EDIT_TODO, async (payload, { rejectWithValue }) => {
    try {
        return await updateTodoService(payload.id, payload.data)
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const createTodoAsyncThunk = createAsyncThunk(ASYNC_ROUTES.CREATE_TODO, async (payload, { rejectWithValue }) => {
    try {
        return await createTodoService(payload)
    } catch (error) {
        return rejectWithValue(error)
    }
})


