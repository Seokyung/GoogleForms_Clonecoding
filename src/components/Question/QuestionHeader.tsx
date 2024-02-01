import React, { useState } from "react";
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
import { questionOptions } from "./QuestionForm";

interface IQHeader {
	questionIdx: number;
	optionIdx: number;
	setOptionIdx: React.Dispatch<React.SetStateAction<number>>;
}

const QuestionHeader = (props: IQHeader) => {
	const [question, setQuestion] = useState<string>("");
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpened = Boolean(anchorEl);

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setQuestion(value);
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
		props.setOptionIdx(idx);
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
				value={question}
				onChange={onTextChange}
			/>
			<Button
				variant="outlined"
				onClick={openMenu}
				startIcon={questionOptions[props.optionIdx].icon}
				endIcon={<ArrowDropDownOutlined />}
			>
				{questionOptions[props.optionIdx].text}
			</Button>
			<Menu
				open={isOpened}
				onClose={closeMenu}
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			>
				{questionOptions.slice(0, 2).map((item) => (
					<MenuItem
						key={item.idx}
						id={item.id}
						onClick={(e) => handleMenuItemClick(e, item.idx)}
					>
						<ListItemIcon>{item.icon}</ListItemIcon>
						<ListItemText>{item.text}</ListItemText>
					</MenuItem>
				))}
				<Divider />
				{questionOptions.slice(2).map((item) => (
					<MenuItem
						key={item.idx}
						id={item.id}
						onClick={(e) => handleMenuItemClick(e, item.idx)}
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
