import React, { useState } from "react";
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

	const [questionOptionId, setQuestionOptionId] = useState<number>(
		useSelector(
			(state: rootState) => state.questionReducer[props.questionIdx].optionId
		)
	);

	const onDeleteQuestion = () => {
		dispatch(deleteQuestion(question.qid));
	};

	const onCopyQuestion = () => {
		dispatch(copyQuestion(props.questionIdx, question));
	};

	const onToggleIsRequired = (isRequired: boolean) => {
		dispatch(toggleRequired(props.questionIdx, isRequired));
	};

	return (
		<SurveyBox>
			<QuestionHeader
				questionIdx={props.questionIdx}
				setQuestionOptionId={setQuestionOptionId}
			/>
			<QuestionContent
				questionIdx={props.questionIdx}
				questionOptionId={questionOptionId}
			/>
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
