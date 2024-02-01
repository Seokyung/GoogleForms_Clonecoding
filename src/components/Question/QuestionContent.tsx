import React, { useState } from "react";
import { IQuestionList } from "../../interfaces/IQuestionList";
import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";
import { CheckBox } from "@mui/icons-material";

interface IQuestionIdx {
	question: IQuestionList;
}

const QuestionContent = (props: IQuestionIdx) => {
	const [isPreview, setIsPreview] = useState<boolean>(true);
	const [optionText, setOptionText] = useState<string>("옵션");

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setOptionText(value);
	};

	const renderOption = () => {
		switch (props.question.optionId) {
			case 0:
				return (
					<TextField
						variant="standard"
						placeholder="단답형 텍스트"
						disabled={isPreview}
						margin="dense"
					/>
				);
			case 1:
				return (
					<TextField
						variant="standard"
						placeholder="장문형 텍스트"
						disabled={isPreview}
						multiline
						margin="dense"
					/>
				);
			case 2:
				return (
					<FormControl>
						<RadioGroup>
							<FormControlLabel
								control={<Radio />}
								label={
									<TextField
										variant="standard"
										value={optionText}
										onChange={onTextChange}
										margin="normal"
									/>
								}
							/>
						</RadioGroup>
					</FormControl>
				);
			case 3:
				return (
					<FormControl>
						<FormControlLabel
							control={<CheckBox />}
							label={
								<TextField
									variant="standard"
									value={optionText}
									onChange={onTextChange}
									margin="normal"
								/>
							}
						/>
					</FormControl>
				);
			case 4:
				return (
					<TextField
						variant="standard"
						value={optionText}
						onChange={onTextChange}
						margin="normal"
					/>
				);
			default:
				break;
		}
	};

	return <div>{renderOption()}</div>;
};

export default QuestionContent;
