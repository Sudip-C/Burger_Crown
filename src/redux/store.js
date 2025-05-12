import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import DineType from "./reducers/dine-type";
import {thunk} from "redux-thunk";
import { AuthReducer } from "./reducers/auth";

const rootReducer = combineReducers({
    DineType,AuthReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))