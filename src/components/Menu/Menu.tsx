import React from "react";
import { useDispatch } from "react-redux";
import { addQuestion } from "../../modules/actions/question";
import styled from "styled-components";
import {
	AddCircleOutlineOutlined,
	RemoveRedEyeOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const Menu = () => {
	const dispatch = useDispatch();

	const onAddQuestion = () => {
		dispatch(addQuestion());
	};

	const onPreviewSurvey = () => {
		window.open("http://localhost:3000/preview", "_blank");
	};

	return (
		<Container>
			<IconButton onClick={onAddQuestion}>
				<AddCircleOutlineOutlined />
			</IconButton>
			<IconButton onClick={onPreviewSurvey}>
				<RemoveRedEyeOutlined />
			</IconButton>
		</Container>
	);
};

const Container = styled.div`
	z-index: 1;
	position: sticky;
	top: 1rem;
	display: flex;
	flex-direction: column;
	margin-right: -60px;
	padding: 0.25rem 0.125rem;
	gap: 0.125rem;
	width: 50px;
	height: fit-content;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
	background-color: #fff;
	button {
		svg {
			color: #666;
		}
	}
`;

export default Menu;
