import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// Configuration for Redux Persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
};

// Persisted reducer with Redux Persist
export const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux store with the persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Initialize the Redux Persist store
export const persistor = persistStore(store);
