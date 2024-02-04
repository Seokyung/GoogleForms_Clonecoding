import React, { ReactNode } from "react";
import { IOptionList } from "../../interfaces/IOptionList";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import { updateOption } from "../../modules/actions/option";
import { IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IOptionListItem {
	questionIdx: number;
	option: IOptionList;
	listItemIdx: number;
	deleteOption: (id: string, idx: number) => void;
	renderOptionIcon: (idx: number) => ReactNode;
}

const OptionListItem = (props: IOptionListItem) => {
	const question = useSelector(
		(state: rootState) => state.questionReducer[props.questionIdx]
	);
	const optionList = useSelector(
		(state: rootState) =>
			state.questionReducer[props.questionIdx].optionData.options
	);
	const dispatch = useDispatch();

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		dispatch(updateOption(question, props.listItemIdx, value));
	};

	return (
		<ListItem
			secondaryAction={
				optionList.length !== 1 && (
					<IconButton
						edge="end"
						onClick={() =>
							props.deleteOption(props.option.id, props.listItemIdx)
						}
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
						disabled={props.option.type === "etc"}
						onChange={onTextChange}
						fullWidth
					/>
				}
			/>
		</ListItem>
	);
};

export default OptionListItem;
