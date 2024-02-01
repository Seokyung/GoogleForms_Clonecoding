import React, { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionOption from "./QuestionOption";
import { IQuestionList } from "../Survey/SurveyForm";
import { SurveyBox } from "../../styles/SurveyBox";
import { ContentCopy, DeleteOutline } from "@mui/icons-material";
import { Button, Divider, FormControlLabel, Switch } from "@mui/material";
import styled from "styled-components";

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
			<QuestionHeader
				question={props.question}
				optionIdx={optionIdx}
				setOptionIdx={setOptionIdx}
			/>
			<QuestionOption optionIdx={optionIdx} />
			<Divider sx={{ margin: "1rem 0" }} />
			<FooterContainer>
				<div>
					<Button>
						<ContentCopy />
					</Button>
					<Button onClick={deleteQuestion}>
						<DeleteOutline />
					</Button>
				</div>
				<Divider orientation="vertical" />
				<div>
					<FormControlLabel
						label="필수"
						labelPlacement="start"
						control={<Switch />}
					/>
				</div>
			</FooterContainer>
		</SurveyBox>
	);
};

const FooterContainer = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
`;

export default QuestionForm;
