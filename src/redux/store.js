import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todos } from "./todos";

const reducers = {
    todos
};

const rootReducer = combineReducers(reducers);

const store = configureStore({
    reducer: rootReducer,
});

export default store;