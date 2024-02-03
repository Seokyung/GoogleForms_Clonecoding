import React, { useState } from "react";
import { IOptionENUM, OptionENUM } from "../../enums/OptionEnum";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../modules/reducers";
import {
	changeQuestionOption,
	changeQuestionTitle,
} from "../../modules/actions/question";
import styled from "styled-components";
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

interface IQHeader {
	questionIdx: number;
}

const QuestionHeader = (props: IQHeader) => {
	const question = useSelector(
		(state: rootState) => state.questionReducer[props.questionIdx]
	);
	const dispatch = useDispatch();

	const [questionTitle, setQuestionTitle] = useState<string>(question.title);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpened = Boolean(anchorEl);

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setQuestionTitle(value);
		dispatch(changeQuestionTitle(props.questionIdx, question, value));
	};

	const openOptionMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const closeOptionMenu = () => {
		setAnchorEl(null);
	};

	const handleMenuItemClick = (
		e: React.MouseEvent<HTMLElement>,
		idx: number
	) => {
		dispatch(changeQuestionOption(props.questionIdx, question, idx));
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
				onClick={openOptionMenu}
				startIcon={OptionENUM[question.optionId].icon}
				endIcon={<ArrowDropDownOutlined />}
			>
				{OptionENUM[question.optionId].text}
			</Button>
			<Menu
				open={isOpened}
				onClose={closeOptionMenu}
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
