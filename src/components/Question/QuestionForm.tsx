import React from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionContent from "./QuestionContent";
import QuestionFooter from "./QuestionFooter";
import { IQuestion } from "../../interfaces/IQuestion";
import { SurveyBox } from "../../styles/SurveyBox";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import { copyQuestion } from "../../modules/actions/question";

interface IQForm {
	question: IQuestion;
	questionIdx: number;
}

const QuestionForm = (props: IQForm) => {
	const questionList = useSelector((state: rootState) => state.questionReducer);
	const dispatch = useDispatch();

	const onDeleteQuestion = () => {
		// props.setQuestionList(
		// 	questionList.filter((el) => el.qid !== props.question.qid)
		// );
		console.log("delete question");
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
