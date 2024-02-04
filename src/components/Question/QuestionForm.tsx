import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import {
	copyQuestion,
	deleteQuestion,
	toggleRequired,
} from "../../modules/actions/question";
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

	const onToggleIsRequired = (isRequired: boolean) => {
		console.log(isRequired);
		dispatch(toggleRequired(props.questionIdx, isRequired));
	};

	return (
		<SurveyBox>
			<QuestionHeader questionIdx={props.questionIdx} />
			<QuestionContent questionIdx={props.questionIdx} />
			<Divider sx={{ margin: "1rem 0" }} />
			<QuestionFooter
				questionIdx={props.questionIdx}
				onCopy={onCopyQuestion}
				onDelete={onDeleteQuestion}
				onToggle={onToggleIsRequired}
			/>
		</SurveyBox>
	);
};

export default QuestionForm;
