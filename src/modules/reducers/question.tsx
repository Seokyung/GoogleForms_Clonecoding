import { nanoid } from "nanoid";
import { IQuestion } from "../../interfaces/IQuestion";
import {
	ADD_ETC,
	ADD_OPTION,
	ADD_QUESTION,
	CHANGE_QUESTION_OPTION,
	CHANGE_QUESTION_TITLE,
	COPY_QUESTION,
	DELETE_OPTION,
	DELETE_QUESTION,
	TOGGLE_ETC,
	CHANGE_OPTION_TEXT,
	addEtc,
	addOption,
	addQuestion,
	changeQuestionOption,
	changeQuestionTitle,
	copyQuestion,
	deleteOption,
	deleteQuestion,
	toggleEtc,
	updateOption,
} from "../actions/question";
import { IOptionList } from "../../interfaces/IOptionList";

type QuestionAction =
	| ReturnType<typeof addQuestion>
	| ReturnType<typeof copyQuestion>
	| ReturnType<typeof deleteQuestion>
	| ReturnType<typeof changeQuestionTitle>
	| ReturnType<typeof changeQuestionOption>
	| ReturnType<typeof addOption>
	| ReturnType<typeof addEtc>
	| ReturnType<typeof updateOption>
	| ReturnType<typeof deleteOption>
	| ReturnType<typeof toggleEtc>;

export type QuestionState = IQuestion[];

const initialState: QuestionState = [
	{
		qid: nanoid(),
		title: "",
		optionId: 2,
		optionData: {
			options: [{ id: nanoid(), text: "옵션 1" }],
			isEtcAdded: false,
		},
		isRequired: false,
	},
];

function questionReducer(
	state: QuestionState = initialState,
	action: QuestionAction
): IQuestion[] {
	switch (action.type) {
		case ADD_QUESTION:
			return [
				...state,
				{
					qid: action.payload.id,
					title: "",
					optionId: 2,
					optionData: {
						options: [{ id: nanoid(), text: "옵션 1" }],
						isEtcAdded: false,
					},
					isRequired: false,
				},
			];
		case COPY_QUESTION:
			const copy_prevQuestionList = state.slice(0, action.payload.idx + 1);
			const copy_nextQuestionList = state.slice(action.payload.idx + 1);
			return [
				...copy_prevQuestionList,
				{
					...action.payload.question,
					qid: nanoid(),
				},
				...copy_nextQuestionList,
			];
		case DELETE_QUESTION:
			return state.filter((el) => el.qid !== action.payload.id);
		case CHANGE_QUESTION_TITLE:
			const changeTitle_prevQuestionList = state.slice(0, action.payload.idx);
			const changeTitle_nextQuestionList = state.slice(action.payload.idx + 1);
			return [
				...changeTitle_prevQuestionList,
				{
					...action.payload.question,
					title: action.payload.title,
				},
				...changeTitle_nextQuestionList,
			];
		case CHANGE_QUESTION_OPTION:
			const changeOption_prevQuestionList = state.slice(0, action.payload.idx);
			const changeOption_nextQuestionList = state.slice(action.payload.idx + 1);
			return [
				...changeOption_prevQuestionList,
				{
					...action.payload.question,
					optionId: action.payload.optionId,
				},
				...changeOption_nextQuestionList,
			];
		case ADD_OPTION:
			const addOption_prevQuestionList = state.slice(
				0,
				action.payload.questionIdx
			);
			const addOption_nextQuestionList = state.slice(
				action.payload.questionIdx + 1
			);
			const addOption_prevOptionList = action.payload.optionList.slice(
				0,
				action.payload.optionList.length - 1
			);
			let addOption_newOptionList: IOptionList[];
			if (action.payload.isEtcAdded) {
				addOption_newOptionList = [
					...addOption_prevOptionList,
					{
						id: nanoid(),
						text: `옵션 ${action.payload.optionIdx}`,
					},
					action.payload.optionList[action.payload.optionList.length - 1],
				];
			} else {
				addOption_newOptionList = [
					...action.payload.optionList,
					{
						id: nanoid(),
						text: `옵션 ${action.payload.optionIdx}`,
					},
				];
			}
			return [
				...addOption_prevQuestionList,
				{
					...action.payload.question,
					optionData: {
						options: addOption_newOptionList,
						isEtcAdded: action.payload.isEtcAdded,
					},
				},
				...addOption_nextQuestionList,
			];
		case CHANGE_OPTION_TEXT:
			return state;
		case DELETE_OPTION:
			return state;
		case ADD_ETC:
			const addEtc_prevQuestionList = state.slice(
				0,
				action.payload.questionIdx
			);
			const addEtc_nextQuestionList = state.slice(
				action.payload.questionIdx + 1
			);
			const addEtc_newOptionList = [
				...action.payload.optionList,
				{
					id: nanoid(),
					text: "기타...",
				},
			];
			return [
				...addEtc_prevQuestionList,
				{
					...action.payload.question,
					optionData: {
						options: addEtc_newOptionList,
						isEtcAdded: true,
					},
				},
				...addEtc_nextQuestionList,
			];
		case TOGGLE_ETC:
			const toggleEtc_prevQuestionList = state.slice(
				0,
				action.payload.questionIdx
			);
			const toggleEtc_nextQuestionList = state.slice(
				action.payload.questionIdx + 1
			);
			return [
				...toggleEtc_prevQuestionList,
				{
					...action.payload.question,
					optionData: {
						options: action.payload.optionList,
						isEtcAdded: action.payload.isEtcAdded,
					},
				},
				...toggleEtc_nextQuestionList,
			];
		default:
			return state;
	}
}

export default questionReducer;
