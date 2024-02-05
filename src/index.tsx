import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/reducers";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const store = createStore(rootReducer);

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</Provider>
);
