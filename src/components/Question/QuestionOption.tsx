import React from "react";
import { questionOptions } from "../../datas/questionOptions";
import { TextField } from "@mui/material";

interface IQuestionIdx {
	optionIdx: number;
}

const QuestionOption = (questionIdx: IQuestionIdx) => {
	const renderOption = () => {
		switch (questionIdx.optionIdx) {
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
						placeholder="장문형 텍스트"
						disabled
						multiline
						margin="dense"
					/>
				);
			case 2:
				return <div>{questionOptions[questionIdx.optionIdx].text}</div>;
			case 3:
				return <div>{questionOptions[questionIdx.optionIdx].text}</div>;
			case 4:
				return <div>{questionOptions[questionIdx.optionIdx].text}</div>;
			default:
				break;
		}
	};

	return <div>{renderOption()}</div>;
};

export default QuestionOption;
