import React, { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionContent from "./QuestionContent";
import { IQuestionList } from "../Survey/SurveyForm";
import { SurveyBox } from "../../styles/SurveyBox";
import { Divider } from "@mui/material";
import QuestionFooter from "./QuestionFooter";

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
			props.questionList.filter((el) => el.qid !== props.question.qid)
		);
	};

	return (
		<SurveyBox>
			<QuestionHeader
				question={props.question}
				optionIdx={optionIdx}
				setOptionIdx={setOptionIdx}
				questionIdx={props.questionIdx}
				questionList={props.questionList}
				setQuestionList={props.setQuestionList}
			/>
			<QuestionContent optionIdx={optionIdx} />
			<Divider sx={{ margin: "1rem 0" }} />
			<QuestionFooter onDelete={deleteQuestion} />
		</SurveyBox>
	);
};

export default QuestionForm;
