import { nanoid } from "nanoid";
import { IOptionData } from "../../interfaces/IOptionData";
import {
	DELETE_OPTION,
	deleteEtc,
	deleteOption,
	updateOption,
} from "../actions/option";
import { IOptionList } from "../../interfaces/IOptionList";

type OptionAction =
	| ReturnType<typeof deleteOption>
	| ReturnType<typeof updateOption>
	| ReturnType<typeof deleteEtc>;

export type OptionState = IOptionData[];

const initialState: OptionState = [
	{
		options: [
			{
				id: nanoid(),
				type: "option",
				text: "옵션 1",
			},
		],
		isEtcAdded: false,
	},
];

function optionReducer(
	state: OptionState = initialState,
	action: OptionAction
): IOptionData[] {
	switch (action.type) {
		// case DELETE_OPTION:
		// 	return {
		// 		options: action.payload.options.filter((el) => {
		// 			return el.id !== action.payload.deleteId;
		// 		}),
		// 		isEtcAdded: action.payload.isEtcAdded,
		// 	};
		// case UPDATE_OPTION_TEXT:
		// 	const updateOption_prevQuestionList = state.slice(
		// 		0,
		// 		action.payload.questionIdx
		// 	);
		// 	const updateOption_nextQuestionList = state.slice(
		// 		action.payload.questionIdx + 1
		// 	);
		// 	const updateOption_prevOptionList = action.payload.optionList.slice(
		// 		0,
		// 		action.payload.optionIdx
		// 	);
		// 	const updateOption_nextOptionList = action.payload.optionList.slice(
		// 		action.payload.optionIdx + 1
		// 	);
		// 	const updateOption_newOptionList: IOptionList[] = [
		// 		...updateOption_prevOptionList,
		// 		{
		// 			id: nanoid(),
		// 			type: "option",
		// 			text: action.payload.updatedText,
		// 		},
		// 		...updateOption_nextOptionList,
		// 	];
		// 	return [
		// 		...updateOption_prevQuestionList,
		// 		{
		// 			...action.payload.question,
		// 			optionData: {
		// 				options: updateOption_newOptionList,
		// 				isEtcAdded: action.payload.isEtcAdded,
		// 			},
		// 		},
		// 		...updateOption_nextQuestionList,
		// 	];
		// case ADD_ETC:
		// 	const addEtc_prevQuestionList = state.slice(
		// 		0,
		// 		action.payload.questionIdx
		// 	);
		// 	const addEtc_nextQuestionList = state.slice(
		// 		action.payload.questionIdx + 1
		// 	);
		// 	const addEtc_newOptionList = [
		// 		...action.payload.optionList,
		// 		{
		// 			id: nanoid(),
		// 			type: "etc",
		// 			text: "기타...",
		// 		},
		// 	];
		// 	return [
		// 		...addEtc_prevQuestionList,
		// 		{
		// 			...action.payload.question,
		// 			optionData: {
		// 				options: addEtc_newOptionList,
		// 				isEtcAdded: true,
		// 			},
		// 		},
		// 		...addEtc_nextQuestionList,
		// 	];
		// case DELETE_ETC:
		// 	const toggleEtc_prevQuestionList = state.slice(
		// 		0,
		// 		action.payload.questionIdx
		// 	);
		// 	const toggleEtc_nextQuestionList = state.slice(
		// 		action.payload.questionIdx + 1
		// 	);
		// 	return [
		// 		...toggleEtc_prevQuestionList,
		// 		{
		// 			...action.payload.question,
		// 			optionData: {
		// 				options: action.payload.optionList,
		// 				isEtcAdded: false,
		// 			},
		// 		},
		// 		...toggleEtc_nextQuestionList,
		// 	];
		default:
			return state;
	}
}

export default optionReducer;
