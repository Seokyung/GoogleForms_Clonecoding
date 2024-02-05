import React, { ReactNode, useState } from "react";
import { IOptionList } from "../../interfaces/IOptionList";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import { updateOptionData } from "../../modules/actions/question";
import { IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IOptionListItem {
	questionIdx: number;
	option: IOptionList;
	optionListIdx: number;
	deleteOption: (id: string, idx: number) => void;
	renderOptionIcon: (idx: number) => ReactNode;
}

const OptionListItem = (props: IOptionListItem) => {
	const dispatch = useDispatch();
	const optionList = useSelector(
		(state: rootState) =>
			state.questionReducer[props.questionIdx].optionData.options
	);
	const [optionText, setOptionText] = useState<string>(props.option.text);

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setOptionText(value);
		dispatch(updateOptionData(props.questionIdx, props.optionListIdx, value));
	};

	return (
		<ListItem
			secondaryAction={
				optionList.length !== 1 && (
					<IconButton
						edge="end"
						onClick={() =>
							props.deleteOption(props.option.id, props.optionListIdx)
						}
					>
						<CloseIcon />
					</IconButton>
				)
			}
		>
			{props.renderOptionIcon(props.optionListIdx)}
			<ListItemText>
				<TextField
					variant="standard"
					value={props.option.text}
					disabled={props.option.type === "etc"}
					onChange={onTextChange}
					fullWidth
				/>
			</ListItemText>
		</ListItem>
	);
};

export default OptionListItem;
