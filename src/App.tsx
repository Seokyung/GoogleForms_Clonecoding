import React from "react";
import SurveyForm from "./components/Survey/SurveyForm";
import { GlobalStyle } from "./styles/GlobalStyle";
import styled from "styled-components";

function App() {
	return (
		<>
			<GlobalStyle />
			<AppContainer>
				<SurveyForm />
			</AppContainer>
		</>
	);
}

const AppContainer = styled.div`
	display: flex;
	padding: 1rem;
	width: 100%;
`;

export default App;
