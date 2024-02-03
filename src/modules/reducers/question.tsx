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
	UPDATE_OPTION,
	UPDATE_OPTION_DATA,
	addEtc,
	addOption,
	addQuestion,
	changeQuestionOption,
	changeQuestionTitle,
	copyQuestion,
	deleteOption,
	deleteQuestion,
	updateOption,
	updateOptionData,
} from "../actions/question";
import { IOptionList } from "../../interfaces/IOptionList";

type QuestionAction =
	| ReturnType<typeof addQuestion>
	| ReturnType<typeof copyQuestion>
	| ReturnType<typeof deleteQuestion>
	| ReturnType<typeof changeQuestionTitle>
	| ReturnType<typeof changeQuestionOption>
	| ReturnType<typeof updateOptionData>
	| ReturnType<typeof addOption>
	| ReturnType<typeof addEtc>
	| ReturnType<typeof updateOption>
	| ReturnType<typeof deleteOption>;

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
			const addOption_prevOptionList =
				action.payload.question.optionData.options.slice(
					0,
					action.payload.question.optionData.options.length - 1
				);
			const addOption_nextOptionList =
				action.payload.question.optionData.options[
					action.payload.question.optionData.options.length - 1
				];
			let addOption_newOptionList: IOptionList[];
			if (action.payload.isEtcAdded) {
				addOption_newOptionList = [
					...addOption_prevOptionList,
					{
						id: nanoid(),
						text: `옵션 ${action.payload.optionIdx}`,
					},
					addOption_nextOptionList,
				];
			} else {
				addOption_newOptionList = [
					...action.payload.question.optionData.options,
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
		case ADD_ETC:
			const addEtc_prevQuestionList = state.slice(
				0,
				action.payload.questionIdx
			);
			const addEtc_nextQuestionList = state.slice(
				action.payload.questionIdx + 1
			);
			let addEtc_newOptionList = [
				...action.payload.question.optionData.options,
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
						isEtcAdded: action.payload.isEtcAdded,
					},
				},
				...addEtc_nextQuestionList,
			];
		case UPDATE_OPTION:
			return state;
		case DELETE_OPTION:
			return state;
		case UPDATE_OPTION_DATA:
			const updateOptions_prevQuestionList = state.slice(0, action.payload.idx);
			const updateOptions_nextQuestionList = state.slice(
				action.payload.idx + 1
			);
			return [
				...updateOptions_prevQuestionList,
				{
					...action.payload.question,
					optionData: action.payload.optionData,
				},
				...updateOptions_nextQuestionList,
			];
		default:
			return state;
	}
}

export default questionReducer;
