import React from "react";
import styled from "styled-components";
import { IQuestion } from "../../interfaces/IQuestion";

const PreviewTitle = () => {
	const titleData = JSON.parse(localStorage.getItem("title") || '""');
	const questionData = JSON.parse(localStorage.getItem("survey") || '""');

	return (
		<TitleBox>
			<Title>{titleData.title}</Title>
			<span>{titleData.description}</span>
			{questionData.filter((el: IQuestion) => el.isRequired === true).length !==
				0 && (
				<>
					<Divider />
					<RequireText>* 표시는 필수 질문임</RequireText>
				</>
			)}
		</TitleBox>
	);
};

const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 700px;
	padding: 1.25rem 1.75rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-top: 15px solid rgb(103, 58, 183);
	border-radius: 10px;
	background-color: #fff;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const Title = styled.span`
	font-size: 2rem;
	font-weight: 500;
`;

const Divider = styled.hr`
	width: 100%+3.5rem;
	height: 1px;
	margin-top: 0.25rem;
	margin-bottom: 0.25rem;
	margin-left: -1.75rem;
	margin-right: -1.75rem;
	background-color: rgba(0, 0, 0, 0.2);
`;

const RequireText = styled.span`
	color: rgb(217, 48, 37);
	font-size: 0.875rem;
`;

export default PreviewTitle;
