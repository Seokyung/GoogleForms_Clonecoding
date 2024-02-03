import React from "react";
import { useDispatch } from "react-redux";
import { copyQuestion, deleteQuestion } from "../../modules/actions/question";
import QuestionHeader from "./QuestionHeader";
import QuestionContent from "./QuestionContent";
import QuestionFooter from "./QuestionFooter";
import { IQuestion } from "../../interfaces/IQuestion";
import { SurveyBox } from "../../styles/SurveyBox";
import { Divider } from "@mui/material";

interface IQForm {
	question: IQuestion;
	questionIdx: number;
}

const QuestionForm = (props: IQForm) => {
	const dispatch = useDispatch();

	const onDeleteQuestion = () => {
		dispatch(deleteQuestion(props.question.qid));
		console.log("deleted question id: " + props.question.qid);
	};

	const onCopyQuestion = () => {
		dispatch(copyQuestion(props.questionIdx, props.question));
		console.log("copied question id: " + props.questionIdx);
	};

	return (
		<SurveyBox>
			<QuestionHeader
				question={props.question}
				questionIdx={props.questionIdx}
			/>
			<QuestionContent question={props.question} />
			<Divider sx={{ margin: "1rem 0" }} />
			<QuestionFooter onCopy={onCopyQuestion} onDelete={onDeleteQuestion} />
		</SurveyBox>
	);
};

export default QuestionForm;
