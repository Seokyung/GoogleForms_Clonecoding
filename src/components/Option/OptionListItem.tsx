import React, { ReactNode, useState } from "react";
import { IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IOptionList } from "../../interfaces/IOptionList";

interface IOptionListItem {
	option: IOptionList;
	listIdx: number;
	optionList: IOptionList[];
	deleteOption: (id: string) => void;
	renderOptionIcon: (idx: number) => ReactNode;
}

const OptionListItem = (props: IOptionListItem) => {
	const [optionText, setOptionText] = useState<string>(props.option.text);

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setOptionText(value);
	};

	return (
		<ListItem
			secondaryAction={
				props.optionList.length !== 1 && (
					<IconButton
						edge="end"
						onClick={() => props.deleteOption(props.option.id)}
					>
						<CloseIcon />
					</IconButton>
				)
			}
		>
			{props.renderOptionIcon(props.listIdx)}
			<ListItemText
				primary={
					<TextField
						variant="standard"
						value={optionText}
						onChange={onTextChange}
						fullWidth
					/>
				}
			/>
		</ListItem>
	);
};

export default OptionListItem;
