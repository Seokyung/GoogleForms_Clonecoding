import React from "react";
import { TextField } from "@mui/material";
import styled from "styled-components";

interface IOptionInput {
	placeholderText: string;
	isLong: boolean;
}

const OptionText = (props: IOptionInput) => {
	return (
		<Container>
			<TextField
				variant="standard"
				placeholder={props.placeholderText}
				multiline={props.isLong}
				margin="dense"
				fullWidth={props.isLong}
				disabled
			/>
		</Container>
	);
};

const Container = styled.div`
	margin: 1rem 0;
`;

export default OptionText;
