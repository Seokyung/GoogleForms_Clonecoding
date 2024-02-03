import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import { copyQuestion, deleteQuestion } from "../../modules/actions/question";
import QuestionHeader from "./QuestionHeader";
import QuestionContent from "./QuestionContent";
import QuestionFooter from "./QuestionFooter";
import { SurveyBox } from "../../styles/SurveyBox";
import { Divider } from "@mui/material";

interface IQuestionForm {
	questionIdx: number;
}

const QuestionForm = (props: IQuestionForm) => {
	const question = useSelector(
		(state: rootState) => state.questionReducer[props.questionIdx]
	);
	const dispatch = useDispatch();

	const onDeleteQuestion = () => {
		dispatch(deleteQuestion(question.qid));
	};

	const onCopyQuestion = () => {
		dispatch(copyQuestion(props.questionIdx, question));
	};

	return (
		<SurveyBox>
			<QuestionHeader questionIdx={props.questionIdx} />
			<QuestionContent question={question} />
			<Divider sx={{ margin: "1rem 0" }} />
			<QuestionFooter onCopy={onCopyQuestion} onDelete={onDeleteQuestion} />
		</SurveyBox>
	);
};

export default QuestionForm;
