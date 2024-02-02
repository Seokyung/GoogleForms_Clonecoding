import React, { useState } from "react";
import { IOptionList } from "../../interfaces/IOptionList";
import { nanoid } from "nanoid";
import styled from "styled-components";
import {
	Button,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
	CheckBoxOutlineBlank,
	RadioButtonUnchecked,
} from "@mui/icons-material";

interface IOptionType {
	optionType: string;
}

const OptionList = (props: IOptionType) => {
	const [optionList, setOptionList] = useState<IOptionList[]>([
		{ id: nanoid(), text: "옵션 1" },
	]);
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

	const setOptionIcon = (idx: number) => {
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

	const addOption = (e: React.MouseEvent) => {
		if (isEtcAdded) {
			setOptionList([
				...optionList.slice(0, optionList.length - 1),
				{
					id: nanoid(),
					text: `옵션 ${optionIdx}`,
				},
				optionList[optionList.length - 1],
			]);
		} else {
			setOptionList((optionList) => [
				...optionList,
				{
					id: nanoid(),
					text: `옵션 ${optionIdx}`,
				},
			]);
		}
		setOptionIdx((prev) => prev + 1);
	};

	const addEtc = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!isEtcAdded) {
			setOptionList((optionList) => [
				...optionList,
				{
					id: nanoid(),
					text: "기타...",
				},
			]);
			setIsEtcAdded(true);
		}
	};

	const deleteOption = (deleteId: string) => {
		if (optionList.length !== 1) {
			if (isEtcAdded && optionList[optionList.length - 1].id === deleteId) {
				setIsEtcAdded((prev) => !prev);
			}
			setOptionList(
				optionList.filter((el) => {
					return el.id !== deleteId;
				})
			);
		}
	};

	const renderOptionList = () => {
		return optionList.map((item: IOptionList, idx: number) => {
			return (
				<ListItem
					key={item.id}
					secondaryAction={
						optionList.length !== 1 && (
							<IconButton edge="end" onClick={() => deleteOption(item.id)}>
								<CloseIcon />
							</IconButton>
						)
					}
				>
					{setOptionIcon(idx)}
					<ListItemText
						primary={
							<TextField variant="standard" value={item.text} fullWidth />
						}
					/>
				</ListItem>
			);
		});
	};

	return (
		<Container>
			<List>
				{renderOptionList()}
				<ListItem>
					{setOptionIcon(optionList.length)}
					<ListItemText
						primary={
							<>
								<TextField
									variant="standard"
									placeholder="옵션 추가"
									sx={{ width: "70px" }}
									onClick={addOption}
								/>
								{!isEtcAdded && (
									<>
										또는
										<Button size="small" onClick={addEtc}>
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
