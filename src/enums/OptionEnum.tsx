import { ReactNode } from "react";
import {
	CheckBoxOutlined,
	ExpandCircleDownOutlined,
	RadioButtonChecked,
	ShortText,
	Subject,
} from "@mui/icons-material";

export interface IOptionENUM {
	oid: number;
	name: string;
	icon: ReactNode;
	text: string;
}

export const OptionENUM = [
	{
		oid: 0,
		name: "short",
		icon: <ShortText />,
		text: "단답형",
	},
	{
		oid: 1,
		name: "long",
		icon: <Subject />,
		text: "장문형",
	},
	{
		oid: 2,
		name: "radio",
		icon: <RadioButtonChecked />,
		text: "객관식 질문",
	},
	{
		oid: 3,
		name: "checkbox",
		icon: <CheckBoxOutlined />,
		text: "체크박스",
	},
	{
		oid: 4,
		name: "dropdown",
		icon: <ExpandCircleDownOutlined />,
		text: "드롭다운",
	},
];
