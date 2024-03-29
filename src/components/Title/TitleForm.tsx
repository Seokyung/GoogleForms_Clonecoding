import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import { changeDescription, changeTitle } from "../../modules/actions/title";
import { TextField } from "@mui/material";
import styled from "styled-components";

const TitleForm = () => {
	const titleObj = useSelector((state: rootState) => state.titleReducer);
	const dispatch = useDispatch();

	const [title, setTitle] = useState<string>(titleObj.title);
	const [description, setDescription] = useState<string>(titleObj.description);

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, id } = e.target;
		if (id === "title") {
			if (value === "") {
				setTitle("제목 없는 설문지");
				dispatch(changeTitle("제목 없는 설문지"));
				return;
			}
			setTitle(value);
			dispatch(changeTitle(value));
		} else {
			setDescription(value);
			dispatch(changeDescription(value));
		}
	};

	return (
		<TitleBox>
			<StyledTextField
				id="title"
				variant="standard"
				placeholder="설문지 제목"
				margin="dense"
				value={title}
				onChange={onTextChange}
			/>
			<StyledTextField
				id="description"
				variant="standard"
				placeholder="설문지 설명"
				margin="dense"
				value={description}
				onChange={onTextChange}
			/>
		</TitleBox>
	);
};

const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	width: 736px;
	padding: 1rem 1.5rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-top: 15px solid rgb(103, 58, 183);
	border-radius: 10px;
	background-color: #fff;
	@media (max-width: 768px) {
		width: 100%;
	}
`;

const StyledTextField = styled(TextField)(({ id }) => ({
	"& .MuiInputBase-input": {
		fontSize: id === "title" ? "2rem" : "1rem",
		fontWeight: id === "title" ? 500 : 400,
	},
}));

export default TitleForm;
