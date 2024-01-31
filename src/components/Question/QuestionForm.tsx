import React, { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import { SurveyBox } from "../../styles/SurveyBox";
import {
	CheckBoxOutlined,
	ExpandCircleDownOutlined,
	RadioButtonChecked,
	ShortText,
	Subject,
} from "@mui/icons-material";

export const questionOptions = [
	{
		idx: 0,
		id: "short",
		icon: <ShortText />,
		text: "단답형",
	},
	{
		idx: 1,
		id: "long",
		icon: <Subject />,
		text: "장문형",
	},
	{
		idx: 2,
		id: "optional",
		icon: <RadioButtonChecked />,
		text: "객관식 질문",
	},
	{
		idx: 3,
		id: "checkbox",
		icon: <CheckBoxOutlined />,
		text: "체크박스",
	},
	{
		idx: 4,
		id: "dropdown",
		icon: <ExpandCircleDownOutlined />,
		text: "드롭다운",
	},
];

const QuestionForm = () => {
	const [selectedIdx, setSelectedIdx] = useState<number>(0);

	return (
		<SurveyBox>
			<QuestionHeader
				selectedIdx={selectedIdx}
				setSelectedIdx={setSelectedIdx}
			/>
			<div>{questionOptions[selectedIdx].text}</div>
		</SurveyBox>
	);
};

export default QuestionForm;
