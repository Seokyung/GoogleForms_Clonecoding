import React, { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionOption from "./QuestionOption";
import { IQuestionList } from "../Survey/SurveyForm";
import { SurveyBox } from "../../styles/SurveyBox";
import { ContentCopy, DeleteOutline } from "@mui/icons-material";
import { Button } from "@mui/material";

interface IQForm {
	question: IQuestionList;
	questionIdx: number;
	questionList: IQuestionList[];
	setQuestionList: React.Dispatch<React.SetStateAction<IQuestionList[]>>;
}

const QuestionForm = (props: IQForm) => {
	const [optionIdx, setOptionIdx] = useState<number>(2);

	const deleteQuestion = () => {
		props.setQuestionList(
			props.questionList.filter((el) => el.id !== props.question.id)
		);
	};

	return (
		<SurveyBox>
			<h2>{props.question.id}</h2>
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
