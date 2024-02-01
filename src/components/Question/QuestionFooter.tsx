import React from "react";
import { ContentCopy, DeleteOutline } from "@mui/icons-material";
import { Button, Divider, FormControlLabel, Switch } from "@mui/material";
import styled from "styled-components";

interface IQuestionFooter {
	onDelete: () => void;
}

const QuestionFooter = (props: IQuestionFooter) => {
	return (
		<FooterContainer>
			<div>
				<Button>
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
					control={<Switch />}
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
