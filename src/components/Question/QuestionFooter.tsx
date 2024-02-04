import React from "react";
import { ContentCopy, DeleteOutline } from "@mui/icons-material";
import { Button, Divider, FormControlLabel, Switch } from "@mui/material";
import styled from "styled-components";

interface IQuestionFooter {
	onCopy: () => void;
	onDelete: () => void;
	onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuestionFooter = (props: IQuestionFooter) => {
	return (
		<FooterContainer>
			<div>
				<Button onClick={props.onCopy}>
					<ContentCopy />
				</Button>
				<Button onClick={props.onDelete}>
					<DeleteOutline />
				</Button>
			</div>
			<Divider orientation="vertical" />
			<div>
				<FormControlLabel
					label="필수"
					labelPlacement="start"
					control={<Switch onChange={props.onToggle} />}
				/>
			</div>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
`;

export default QuestionFooter;
