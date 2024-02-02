import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/reducers";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const store = createStore(rootReducer);
console.log(store.getState());

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
