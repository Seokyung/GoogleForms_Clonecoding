import React, { ReactNode } from "react";
import { IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IOptionList } from "../../interfaces/IOptionList";

interface IOptionListItem {
	item: IOptionList;
	listIdx: number;
	optionList: IOptionList[];
	deleteOption: (id: string) => void;
	renderOptionIcon: (idx: number) => ReactNode;
}

const OptionListItem = (props: IOptionListItem) => {
	return (
		<ListItem
			secondaryAction={
				props.optionList.length !== 1 && (
					<IconButton
						edge="end"
						onClick={() => props.deleteOption(props.item.id)}
					>
						<CloseIcon />
					</IconButton>
				)
			}
		>
			{props.renderOptionIcon(props.listIdx)}
			<ListItemText
				primary={
					<TextField variant="standard" value={props.item.text} fullWidth />
				}
			/>
		</ListItem>
	);
};

export default OptionListItem;
