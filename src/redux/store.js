import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import DineType from "./reducers/dine-type";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
    DineType
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))