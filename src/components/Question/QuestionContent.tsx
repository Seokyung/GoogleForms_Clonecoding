import React from "react";
import { IQuestionList } from "../../interfaces/IQuestionList";
import OptionText from "../Option/OptionText";
import OptionList from "../Option/OptionList";

interface IQuestionContent {
	question: IQuestionList;
}

const QuestionContent = (props: IQuestionContent) => {
	const renderOption = () => {
		switch (props.question.optionId) {
			case 0:
				return <OptionText isLong={false} placeholderText="단답형 텍스트" />;
			case 1:
				return <OptionText isLong={true} placeholderText="장문형 텍스트" />;
			case 2:
				return <OptionList optionType="radio" />;
			case 3:
				return <OptionList optionType="checkbox" />;
			case 4:
				return <OptionList optionType="dropdown" />;
			default:
				break;
		}
	};

	return <div>{renderOption()}</div>;
};

export default QuestionContent;
