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
	justify-content: center;
	padding: 1.25rem;
`;

export default App;
