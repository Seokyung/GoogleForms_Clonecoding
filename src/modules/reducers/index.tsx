import { combineReducers } from "@reduxjs/toolkit";
import questionReducer from "./question";
import titleReducer from "./title";
import optionReducer from "./option";

const rootReducer = combineReducers({
	questionReducer,
	titleReducer,
	optionReducer,
});

export default rootReducer;

export type rootState = ReturnType<typeof rootReducer>;
