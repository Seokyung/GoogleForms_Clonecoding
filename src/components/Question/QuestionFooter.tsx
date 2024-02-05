import React, { useState } from "react";
import { useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import styled from "styled-components";
import { ContentCopy, DeleteOutline } from "@mui/icons-material";
import { Divider, FormControlLabel, IconButton, Switch } from "@mui/material";

interface IQuestionFooter {
	questionIdx: number;
	onCopy: () => void;
	onDelete: () => void;
	onToggle: (isRequired: boolean) => void;
}

const QuestionFooter = (props: IQuestionFooter) => {
	const [isRequired, setIsRequired] = useState<boolean>(
		useSelector((state: rootState) => state.questionReducer[props.questionIdx])
			.isRequired
	);

	const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsRequired(e.target.checked);
		props.onToggle(e.target.checked);
	};

	return (
		<FooterContainer>
			<div>
				<IconButton onClick={props.onCopy} size="large">
					<ContentCopy />
				</IconButton>
				<IconButton onClick={props.onDelete} size="large">
					<DeleteOutline />
				</IconButton>
			</div>
			<Divider orientation="vertical" />
			<div>
				<FormControlLabel
					label="필수"
					labelPlacement="start"
					control={
						<Switch checked={isRequired} onChange={handleToggleChange} />
					}
				/>
			</div>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
	gap: 0.5rem;
`;

export default QuestionFooter;
