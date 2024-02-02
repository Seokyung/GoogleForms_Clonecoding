import { combineReducers } from "@reduxjs/toolkit";
import questionReducer from "./question";

const rootReducer = combineReducers({ questionReducer });

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
