import { TextField } from "@mui/material";
import React, { useState } from "react";

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
		<div>
			<TextField
				id="title"
				variant="standard"
				label="설문지 제목"
				placeholder="설문지 제목"
				value={title}
				onChange={onTextChange}
			/>
			<TextField
				id="description"
				variant="standard"
				label="설문지 설명"
				placeholder="설문지 설명"
				value={description}
				onChange={onTextChange}
			/>
		</div>
	);
};

TitleForm.defaultProps = {
	title: "제목 없는 설문지",
	description: "",
};

export default TitleForm;
