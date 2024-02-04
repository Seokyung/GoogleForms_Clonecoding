import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import {
	addEtc,
	addOption,
	deleteOption,
	toggleEtc,
} from "../../modules/actions/question";
import { IOptionList } from "../../interfaces/IOptionList";
import OptionListItem from "./OptionListItem";
import styled from "styled-components";
import {
	Button,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
} from "@mui/material";
import {
	CheckBoxOutlineBlank,
	RadioButtonUnchecked,
} from "@mui/icons-material";

interface IOptionListProps {
	optionType: string;
	questionIdx: number;
}

const OptionList = (props: IOptionListProps) => {
	const question = useSelector(
		(state: rootState) => state.questionReducer[props.questionIdx]
	);
	const optionData = useSelector(
		(state: rootState) => state.questionReducer[props.questionIdx].optionData
	);
	const dispatch = useDispatch();

	const [optionIdx, setOptionIdx] = useState<number>(optionData.options.length);
	const [isEtcAdded, setIsEtcAdded] = useState<boolean>(optionData.isEtcAdded);

	const renderRadio = () => {
		return (
			<ListItemIcon>
				<RadioButtonUnchecked />
			</ListItemIcon>
		);
	};
	const renderCheckbox = () => {
		return (
			<ListItemIcon>
				<CheckBoxOutlineBlank />
			</ListItemIcon>
		);
	};
	const renderDropdown = (idx: number) => {
		return <ListItemIcon>{idx + 1}</ListItemIcon>;
	};

	const renderOptionIcon = (idx: number) => {
		switch (props.optionType) {
			case "radio":
				return renderRadio();
			case "checkbox":
				return renderCheckbox();
			case "dropdown":
				return renderDropdown(idx);
			default:
				break;
		}
	};

	const onAddOption = (e: React.MouseEvent) => {
		dispatch(addOption(props.questionIdx, question, optionIdx + 1));
		setOptionIdx((prev) => prev + 1);
	};

	const onAddEtc = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (isEtcAdded === false) {
			// dispatch(addEtc(props.questionIdx, question));
			dispatch(toggleEtc(props.questionIdx, question, true));
			setIsEtcAdded(true);
		}
	};

	const onDeleteOption = (deleteId: string) => {
		if (optionData.options.length !== 1) {
			if (
				isEtcAdded === true &&
				optionData.options[optionData.options.length - 1].id === deleteId
			) {
				setIsEtcAdded((prev) => !prev);
			}
			dispatch(deleteOption(props.questionIdx, question, deleteId));
			// const newOptionList: IOptionList[] = optionData.options.filter((el) => {
			// 	return el.id !== deleteId;
			// });
			// setOptionList(newOptionList);
		}
	};

	const renderOptionList = () => {
		let newList: IOptionList[] = optionData.options;
		if (isEtcAdded === true && props.optionType !== "dropdown") {
			newList = optionData.options.slice(0, optionData.options.length - 1);
		}
		console.log(newList);

		return newList.map((item: IOptionList, idx: number) => {
			return (
				<OptionListItem
					key={idx}
					questionIdx={props.questionIdx}
					option={item}
					listItemIdx={idx}
					deleteOption={onDeleteOption}
					renderOptionIcon={renderOptionIcon}
				/>
			);
		});
	};

	return (
		<Container>
			<List>
				{renderOptionList()}
				<ListItem>
					{renderOptionIcon(
						isEtcAdded
							? optionData.options.length - 1
							: optionData.options.length
					)}
					<ListItemText
						primary={
							<>
								<TextField
									variant="standard"
									placeholder="옵션 추가"
									sx={{ width: "70px" }}
									onClick={onAddOption}
								/>
								{isEtcAdded === false && props.optionType !== "dropdown" && (
									<>
										또는
										<Button size="small" onClick={onAddEtc}>
											'기타' 추가
										</Button>
									</>
								)}
							</>
						}
					/>
				</ListItem>
			</List>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: auto;
`;

export default OptionList;
