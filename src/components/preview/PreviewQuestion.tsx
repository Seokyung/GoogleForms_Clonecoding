import React from "react";
import { IQuestion } from "../../interfaces/IQuestion";
import PreviewOptionText from "./PreviewOptionText";
import PreviewOptionList from "./PreviewOptionList";
import styled from "styled-components";
import { PreviewBox } from "../../styles/PreviewBox";

interface IPreviewQuestion {
	question: IQuestion;
}

const PreviewQuestion = (props: IPreviewQuestion) => {
	const renderOption = () => {
		switch (props.question.optionId) {
			case 0:
				return <PreviewOptionText isLong={false} />;
			case 1:
				return <PreviewOptionText isLong={true} />;
			case 2:
				return (
					<PreviewOptionList
						optionType="radio"
						optionData={props.question.optionData}
					/>
				);
			case 3:
				return (
					<PreviewOptionList
						optionType="checkbox"
						optionData={props.question.optionData}
					/>
				);
			case 4:
				return (
					<PreviewOptionList
						optionType="dropdown"
						optionData={props.question.optionData}
					/>
				);
			default:
				break;
		}
	};

	return (
		<PreviewBox>
			<QuestionTitle>
				<span>{props.question.title}</span>
				{props.question.isRequired && <span id="required">*</span>}
			</QuestionTitle>
			{renderOption()}
		</PreviewBox>
	);
};

const QuestionTitle = styled.div`
	margin-bottom: 1rem;
	span {
		font-size: 1rem;
		font-weight: 500;
	}
	#required {
		padding-left: 0.25rem;
		color: rgb(217, 48, 37);
	}
`;

export default PreviewQuestion;
