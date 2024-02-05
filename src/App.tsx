import React from "react";
import { Route, Routes } from "react-router-dom";
import SurveyPage from "./routes/SurveyPage";
import PreviewPage from "./routes/PreviewPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SurveyPage />} />
			<Route path="/preview" element={<PreviewPage />} />
			<Route path="*" element={<SurveyPage />} />
		</Routes>
	);
}

export default App;
