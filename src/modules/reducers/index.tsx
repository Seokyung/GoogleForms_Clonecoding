import { combineReducers } from "@reduxjs/toolkit";
import questionReducer from "./question";
import titleReducer from "./title";

const rootReducer = combineReducers({
	questionReducer,
	titleReducer,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
