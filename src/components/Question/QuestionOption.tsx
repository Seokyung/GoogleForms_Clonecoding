import React from "react";
import { questionOptions } from "./QuestionForm";
import { TextField } from "@mui/material";

interface IQuestionIdx {
	selectedIdx: number;
}

const QuestionOption = (questionIdx: IQuestionIdx) => {
	const renderOption = () => {
		switch (questionIdx.selectedIdx) {
			case 0:
				return (
					<TextField
						variant="standard"
						placeholder="단답형 텍스트"
						disabled
						margin="dense"
					/>
				);
			case 1:
				return (
					<TextField
						variant="standard"
						placeholder="단답형 텍스트"
						disabled
						multiline
						margin="dense"
					/>
				);
			case 2:
				return <div>{questionOptions[questionIdx.selectedIdx].text}</div>;
			case 3:
				return <div>{questionOptions[questionIdx.selectedIdx].text}</div>;
			case 4:
				return <div>{questionOptions[questionIdx.selectedIdx].text}</div>;
			default:
				break;
		}
	};

	return <div>{renderOption()}</div>;
};

export default QuestionOption;
