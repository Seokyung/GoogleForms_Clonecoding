import React, { useState } from "react";
import { IOptionENUM, OptionENUM } from "../../enums/OptionEnum";
import { IQuestion } from "../../interfaces/IQuestion";
import { ArrowDropDownOutlined } from "@mui/icons-material";
import {
	Button,
	Divider,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	TextField,
} from "@mui/material";
import styled from "styled-components";

interface IQHeader {
	question: IQuestion;
	questionIdx: number;
	questionList: IQuestion[];
	setQuestionList: React.Dispatch<React.SetStateAction<IQuestion[]>>;
}

const QuestionHeader = (props: IQHeader) => {
	const [questionTitle, setQuestionTitle] = useState<string>(
		props.question.title
	);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpened = Boolean(anchorEl);

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setQuestionTitle(value);
		props.setQuestionList([
			...props.questionList.slice(0, props.questionIdx),
			{
				...props.question,
				title: value,
			},
			...props.questionList.slice(
				props.questionIdx + 1,
				props.questionList.length
			),
		]);
	};

	const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const closeMenu = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (
		e: React.MouseEvent<HTMLElement>,
		idx: number
	) => {
		props.setQuestionList([
			...props.questionList.slice(0, props.questionIdx),
			{
				...props.question,
				optionId: idx,
			},
			...props.questionList.slice(
				props.questionIdx + 1,
				props.questionList.length
			),
		]);
		setAnchorEl(null);
	};

	return (
		<Container>
			<QuestionField
				id="description"
				variant="filled"
				placeholder="질문"
				margin="dense"
				fullWidth
				multiline={true}
				value={questionTitle}
				onChange={onTextChange}
			/>
			<Button
				sx={{
					minWidth: "168px",
					minHeight: "48px",
				}}
				variant="outlined"
				onClick={openMenu}
				startIcon={OptionENUM[props.question.optionId].icon}
				endIcon={<ArrowDropDownOutlined />}
			>
				{OptionENUM[props.question.optionId].text}
			</Button>
			<Menu
				open={isOpened}
				onClose={closeMenu}
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			>
				{OptionENUM.slice(0, 2).map((item: IOptionENUM) => (
					<MenuItem
						key={item.oid}
						id={item.name}
						onClick={(e) => handleMenuItemClick(e, item.oid)}
					>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText>{item.text}</ListItemText>
					</MenuItem>
				))}
				<Divider />
				{OptionENUM.slice(2).map((item: IOptionENUM) => (
					<MenuItem
						key={item.oid}
						id={item.name}
						onClick={(e) => handleMenuItemClick(e, item.oid)}
					>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText>{item.text}</ListItemText>
					</MenuItem>
				))}
			</Menu>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
`;

const QuestionField = styled(TextField)(() => ({
	"& .MuiInputBase-root": {
		width: "100%",
		// minWidth: "400px",
		padding: "16px",
		backgroundColor: "rgba(0, 0, 0, 0.025)",
	},
}));

export default QuestionHeader;
