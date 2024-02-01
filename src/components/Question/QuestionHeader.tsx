import React, { useState } from "react";
import { OptionEnum } from "../../datas/OptionEnum";
import { IQuestionList } from "../../interfaces/IQuestionList";
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
	question: IQuestionList;
	questionIdx: number;
	questionList: IQuestionList[];
	setQuestionList: React.Dispatch<React.SetStateAction<IQuestionList[]>>;
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
		// props.setOptionIdx(idx);
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
				// fullWidth
				multiline={true}
				value={questionTitle}
				onChange={onTextChange}
			/>
			<Button
				variant="outlined"
				onClick={openMenu}
				startIcon={OptionEnum[props.question.optionId].icon}
				endIcon={<ArrowDropDownOutlined />}
			>
				{OptionEnum[props.question.optionId].text}
			</Button>
			<Menu
				open={isOpened}
				onClose={closeMenu}
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			>
				{OptionEnum.slice(0, 2).map((item) => (
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
				{OptionEnum.slice(2).map((item) => (
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
	gap: 0.25rem;
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
