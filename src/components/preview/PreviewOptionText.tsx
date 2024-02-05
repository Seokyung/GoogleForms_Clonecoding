import React, { useState } from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

interface IOptionInput {
	isLong: boolean;
}

const PreviewOptionText = (props: IOptionInput) => {
	const [text, setText] = useState<string>("");

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setText(value);
	};

	return (
		<Container>
			<StyledTextField
				variant="standard"
				margin="normal"
				placeholder="내 답변"
				value={text}
				onChange={onTextChange}
				multiline={props.isLong}
				fullWidth={props.isLong}
			/>
		</Container>
	);
};

const Container = styled.div`
	margin-top: 0.75rem;
`;

const StyledTextField = styled(TextField)(({ id }) => ({
	"& .MuiInputBase-input": {
		fontSize: "0.875rem",
	},
}));

export default PreviewOptionText;
