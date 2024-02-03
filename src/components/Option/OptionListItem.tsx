import React, { ReactNode, useState } from "react";
import { IOptionList } from "../../interfaces/IOptionList";
import { useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import { IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IOptionListItem {
	questionIdx: number;
	option: IOptionList;
	listItemIdx: number;
	deleteOption: (id: string) => void;
	renderOptionIcon: (idx: number) => ReactNode;
}

const OptionListItem = (props: IOptionListItem) => {
	const [optionText, setOptionText] = useState<string>(props.option.text);
	const optionList = useSelector(
		(state: rootState) =>
			state.questionReducer[props.questionIdx].optionData.options
	);

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setOptionText(value);
	};

	return (
		<ListItem
			secondaryAction={
				optionList.length !== 1 && (
					<IconButton
						edge="end"
						onClick={() => props.deleteOption(props.option.id)}
					>
						<CloseIcon />
					</IconButton>
				)
			}
		>
			{props.renderOptionIcon(props.listItemIdx)}
			<ListItemText
				primary={
					<TextField
						variant="standard"
						value={props.option.text}
						onChange={onTextChange}
						fullWidth
					/>
				}
			/>
		</ListItem>
	);
};

export default OptionListItem;
