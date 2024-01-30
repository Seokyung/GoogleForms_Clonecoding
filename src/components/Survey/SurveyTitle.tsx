import { TextField } from "@mui/material";
import React, { useState } from "react";

interface ITitle {
	titleTxt: string;
	titlePlaceholder: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SurveyTitle = ({ titleTxt, titlePlaceholder, onChange }: ITitle) => {
	const [title, setTitle] = useState<string>(titleTxt);
	const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	return (
		<div>
			<TextField
				variant="standard"
				label={titlePlaceholder}
				placeholder={titlePlaceholder}
				value={title}
				onChange={onTitleChange}
			/>
		</div>
	);
};

SurveyTitle.defaultProps = {
	titleTxt: "제목 없는 설문지",
	titlePlaceholder: "설문지 제목",
	onChange: () => {},
};

export default SurveyTitle;
