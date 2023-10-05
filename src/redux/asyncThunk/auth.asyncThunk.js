import {createAsyncThunk} from "@reduxjs/toolkit";
import { ASYNC_ROUTES } from "../../utils/constants/redux.constants";
import { loginServices, registerServices } from "../services";


export const loginAsyncThunk = createAsyncThunk(ASYNC_ROUTES.LOGIN, async (paylaod, {rejectWithValue})=>{
    try {
        return await loginServices(paylaod)
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const registerAsyncThunk = createAsyncThunk(ASYNC_ROUTES.REGISTER, async (paylaod, {rejectWithValue})=>{
    try {
        return await registerServices(paylaod)  
    } catch (error) {
        return rejectWithValue(error)
    }
})