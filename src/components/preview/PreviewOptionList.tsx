import React, { useState } from "react";
import { IOptionData } from "../../interfaces/IOptionData";
import styled from "styled-components";
import {
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormGroup,
	ListItemText,
	Menu,
	MenuItem,
	Radio,
	RadioGroup,
	TextField,
} from "@mui/material";
import { ArrowDropDownOutlined } from "@mui/icons-material";

interface IPreviewOptionList {
	optionType: string;
	optionData: IOptionData;
}

const PreviewOptionList = (props: IPreviewOptionList) => {
	const [radioValue, setRadioValue] = useState<string>("");
	const [checkboxValue, setCheckboxValue] = useState(
		props.optionData.options.map((item) => {
			return {
				...item,
				isChecked: false,
			};
		})
	);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isOpened = Boolean(anchorEl);
	const [dropdownValue, setDropdownValue] = useState<string>("선택");

	const [etcText, setEtcText] = useState<string>("");

	const openOptionMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(e.currentTarget);
	};

	const closeOptionMenu = () => {
		setAnchorEl(null);
	};

	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setRadioValue(value);
	};
	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCheckboxValue(
			checkboxValue.map((item) => {
				return {
					...item,
					isChecked:
						item.id === e.target.id ? e.target.checked : item.isChecked,
				};
			})
		);
	};
	const handleMenuItemClick = (e: React.MouseEvent<HTMLElement>) => {
		setDropdownValue(e.currentTarget.id);
		setAnchorEl(null);
	};

	const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setEtcText(value);
	};

	const renderEtc = () => {
		return (
			<div>
				<span>기타:</span>
				<TextField variant="standard" value={etcText} onChange={onTextChange} />
			</div>
		);
	};

	const renderRadio = () => {
		return (
			<FormControl>
				<RadioGroup value={radioValue} onChange={handleRadioChange}>
					{props.optionData.options.map((item) => {
						return (
							<FormControlLabel
								key={item.id}
								value={item.id}
								label={item.type === "etc" ? renderEtc() : item.text}
								control={<Radio />}
							/>
						);
					})}
				</RadioGroup>
			</FormControl>
		);
	};
	const renderCheckbox = () => {
		return (
			<FormControl>
				<FormGroup>
					{props.optionData.options.map((item) => {
						return (
							<FormControlLabel
								key={item.id}
								label={item.type === "etc" ? renderEtc() : item.text}
								control={
									<Checkbox id={item.id} onChange={handleCheckboxChange} />
								}
							/>
						);
					})}
				</FormGroup>
			</FormControl>
		);
	};
	const renderDropdown = () => {
		return (
			<div>
				<Button
					sx={{
						display: "flex",
						justifyContent: "space-between",
						minWidth: "168px",
						minHeight: "48px",
					}}
					variant="outlined"
					onClick={openOptionMenu}
					endIcon={<ArrowDropDownOutlined />}
				>
					{dropdownValue}
				</Button>
				<Menu
					open={isOpened}
					onClose={closeOptionMenu}
					anchorEl={anchorEl}
					anchorOrigin={{ vertical: "top", horizontal: "left" }}
				>
					<MenuItem
						id="선택"
						onClick={handleMenuItemClick}
						sx={{
							minWidth: "168px",
							minHeight: "48px",
						}}
					>
						<ListItemText>선택</ListItemText>
					</MenuItem>
					<Divider />
					{props.optionData.options.map((item) => (
						<MenuItem
							key={item.id}
							id={item.text}
							onClick={handleMenuItemClick}
							sx={{
								minWidth: "168px",
								minHeight: "48px",
							}}
						>
							<ListItemText>{item.text}</ListItemText>
						</MenuItem>
					))}
				</Menu>
			</div>
		);
	};

	const renderOptionList = () => {
		switch (props.optionType) {
			case "radio":
				return renderRadio();
			case "checkbox":
				return renderCheckbox();
			case "dropdown":
				return renderDropdown();
			default:
				break;
		}
	};

	return <Container>{renderOptionList()}</Container>;
};

export default PreviewOptionList;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: auto;
`;
