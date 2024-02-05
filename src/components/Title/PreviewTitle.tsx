import React from "react";
import styled from "styled-components";

const PreviewTitle = () => {
	const titleData = JSON.parse(localStorage.getItem("title") || '""');

	return (
		<TitleBox>
			<TitleText>{titleData.title}</TitleText>
			<span>{titleData.description}</span>
		</TitleBox>
	);
};

const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
	width: 736px;
	padding: 1.25rem 1.75rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-top: 15px solid rgb(103, 58, 183);
	border-radius: 10px;
	background-color: #fff;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const TitleText = styled.span`
	font-size: 2rem;
	font-weight: 500;
`;

export default PreviewTitle;
