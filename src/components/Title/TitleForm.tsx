import { TextField } from "@mui/material";
import React, { useState } from "react";
import { SurveyBox } from "../../styles/SurveyBox";
import styled from "styled-components";

interface IForm {
	title: string;
	description: string;
}

const TitleForm = (formObj: IForm) => {
	const [title, setTitle] = useState<string>(formObj.title);
	const [description, setDescription] = useState<string>(formObj.description);

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, id } = e.target;
		id === "title" ? setTitle(value) : setDescription(value);
	};

	return (
		<SurveyBox>
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
		</SurveyBox>
	);
};

TitleForm.defaultProps = {
	title: "제목 없는 설문지",
	description: "",
};

const StyledTextField = styled(TextField)(({ id }) => ({
	"& .MuiInputBase-input": {
		fontSize: id === "title" ? "2rem" : "1rem",
		fontWeight: id === "title" ? 500 : 400,
	},
}));

export default TitleForm;
