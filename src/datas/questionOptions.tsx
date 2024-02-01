import {
	CheckBoxOutlined,
	ExpandCircleDownOutlined,
	RadioButtonChecked,
	ShortText,
	Subject,
} from "@mui/icons-material";

export const questionOptions = [
	{
		id: 0,
		name: "short",
		icon: <ShortText />,
		text: "단답형",
	},
	{
		id: 1,
		name: "long",
		icon: <Subject />,
		text: "장문형",
	},
	{
		id: 2,
		name: "radio",
		icon: <RadioButtonChecked />,
		text: "객관식 질문",
	},
	{
		id: 3,
		name: "checkbox",
		icon: <CheckBoxOutlined />,
		text: "체크박스",
	},
	{
		id: 4,
		name: "dropdown",
		icon: <ExpandCircleDownOutlined />,
		text: "드롭다운",
	},
];
