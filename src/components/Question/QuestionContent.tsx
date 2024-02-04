import React from "react";
import OptionText from "../Option/OptionText";
import OptionList from "../Option/OptionList";

interface IQuestionContent {
	questionIdx: number;
	questionOptionId: number;
}

const QuestionContent = (props: IQuestionContent) => {
	const renderOption = () => {
		switch (props.questionOptionId) {
			case 0:
				return <OptionText isLong={false} placeholderText="단답형 텍스트" />;
			case 1:
				return <OptionText isLong={true} placeholderText="장문형 텍스트" />;
			case 2:
				return (
					<OptionList optionType="radio" questionIdx={props.questionIdx} />
				);
			case 3:
				return (
					<OptionList optionType="checkbox" questionIdx={props.questionIdx} />
				);
			case 4:
				return (
					<OptionList optionType="dropdown" questionIdx={props.questionIdx} />
				);
			default:
				break;
		}
	};

	return <div>{renderOption()}</div>;
};

export default QuestionContent;
