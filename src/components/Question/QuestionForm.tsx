import React from "react";
import { nanoid } from "nanoid";
import QuestionHeader from "./QuestionHeader";
import QuestionContent from "./QuestionContent";
import QuestionFooter from "./QuestionFooter";
import { IQuestion } from "../../interfaces/IQuestion";
import { SurveyBox } from "../../styles/SurveyBox";
import { Divider } from "@mui/material";

interface IQForm {
	question: IQuestion;
	questionIdx: number;
	questionList: IQuestion[];
	setQuestionList: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}

const QuestionForm = (props: IQForm) => {
	const deleteQuestion = () => {
		props.setQuestionList(
			props.questionList.filter((el) => el.qid !== props.question.qid)
		);
	};

	const copyQuestion = () => {
		props.setQuestionList([
			...props.questionList.slice(0, props.questionIdx + 1),
			{
				...props.question,
				qid: nanoid(),
			},
			...props.questionList.slice(
				props.questionIdx + 2,
				props.questionList.length
			),
		]);
	};

	return (
		<SurveyBox>
			<QuestionHeader
				question={props.question}
				questionIdx={props.questionIdx}
				questionList={props.questionList}
				setQuestionList={props.setQuestionList}
			/>
			<QuestionContent
				question={props.question}
				questionList={props.questionList}
				setQuestionList={props.setQuestionList}
			/>
			<Divider sx={{ margin: "1rem 0" }} />
			<QuestionFooter onCopy={copyQuestion} onDelete={deleteQuestion} />
		</SurveyBox>
	);
};

export default QuestionForm;
