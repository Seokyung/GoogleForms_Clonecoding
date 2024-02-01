import React, { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import { SurveyBox } from "../../styles/SurveyBox";
import {
	CheckBoxOutlined,
	ContentCopy,
	DeleteOutline,
	ExpandCircleDownOutlined,
	RadioButtonChecked,
	ShortText,
	Subject,
} from "@mui/icons-material";
import QuestionOption from "./QuestionOption";
import { Button } from "@mui/material";
import { IQListProps } from "../Survey/SurveyForm";

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
		id: "radio",
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

interface IQForm {
	question: IQListProps;
	questionIdx: number;
	questionList: IQListProps[];
	setQuestionList: React.Dispatch<React.SetStateAction<IQListProps[]>>;
}

const QuestionForm = (props: IQForm) => {
	const [optionIdx, setOptionIdx] = useState<number>(2);

	const deleteQuestion = () => {
		console.log(props.questionList);
		console.log(props.question);
		// props.setQuestionList(props.questionList.splice(props.questionIdx, 1));
	};

	return (
		<SurveyBox>
			<QuestionHeader
				questionIdx={props.questionIdx}
				optionIdx={optionIdx}
				setOptionIdx={setOptionIdx}
			/>
			<QuestionOption optionIdx={optionIdx} />
			<div>
				<Button>
					<ContentCopy />
				</Button>
				<Button onClick={deleteQuestion}>
					<DeleteOutline />
				</Button>
			</div>
		</SurveyBox>
	);
};

export default QuestionForm;
