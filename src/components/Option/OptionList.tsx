import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import { addEtc, addOption } from "../../modules/actions/question";
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
	const optionList2 = useSelector(
		(state: rootState) =>
			state.questionReducer[props.questionIdx].optionData.options
	);
	const dispatch = useDispatch();

	const [optionList, setOptionList] = useState<IOptionList[]>(
		question.optionData.options
	);
	const [optionIdx, setOptionIdx] = useState<number>(2);
	const [isEtcAdded, setIsEtcAdded] = useState<boolean>(false);

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
		dispatch(addOption(props.questionIdx, question, optionIdx, isEtcAdded));
		setOptionIdx((prev) => prev + 1);
	};

	const onAddEtc = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!isEtcAdded) {
			dispatch(addEtc(props.questionIdx, question, isEtcAdded));
			setIsEtcAdded(true);
		}
	};

	const onDeleteOption = (deleteId: string) => {
		if (optionList2.length !== 1) {
			if (isEtcAdded && optionList2[optionList2.length - 1].id === deleteId) {
				setIsEtcAdded((prev) => !prev);
			}
			const newOptionList: IOptionList[] = optionList2.filter((el) => {
				return el.id !== deleteId;
			});
			setOptionList(newOptionList);
		}
	};

	const renderOptionList = () => {
		let newList: IOptionList[] = optionList2;
		if (isEtcAdded && props.optionType === "dropdown") {
			newList = optionList2.slice(0, optionList2.length - 1);
		}
		return newList.map((item: IOptionList, idx: number) => {
			return (
				<OptionListItem
					key={idx}
					option={item}
					listIdx={idx}
					optionList={optionList2}
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
						isEtcAdded ? optionList.length - 1 : optionList.length
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
								{!isEtcAdded && (
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
