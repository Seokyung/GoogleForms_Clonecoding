import React from "react";
import { TextField } from "@mui/material";

interface IOptionInput {
	placeholderText: string;
	isLong: boolean;
}

const OptionText = (props: IOptionInput) => {
	return (
		<div>
			<TextField
				variant="standard"
				placeholder={props.placeholderText}
				multiline={props.isLong}
				margin="dense"
				fullWidth={props.isLong}
				disabled
			/>
		</div>
	);
};

export default OptionText;
