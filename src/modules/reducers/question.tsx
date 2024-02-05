import { nanoid } from "nanoid";
import { IQuestion } from "../../interfaces/IQuestion";
import {
	ADD_ETC,
	ADD_OPTION,
	ADD_QUESTION,
	CHANGE_QUESTION_OPTION,
	CHANGE_QUESTION_TITLE,
	COPY_QUESTION,
	DELETE_ETC,
	DELETE_OPTION,
	DELETE_QUESTION,
	GET_QUESTION,
	TOGGLE_REQUIRED,
	UPDATE_QUESTION_OPTION_DATA,
	addEtc,
	addOption,
	addQuestion,
	changeQuestionOption,
	changeQuestionTitle,
	copyQuestion,
	deleteEtc,
	deleteOption,
	deleteQuestion,
	getQuestion,
	toggleRequired,
	updateOptionData,
} from "../actions/question";

type QuestionAction =
	| ReturnType<typeof addQuestion>
	| ReturnType<typeof copyQuestion>
	| ReturnType<typeof deleteQuestion>
	| ReturnType<typeof changeQuestionTitle>
	| ReturnType<typeof changeQuestionOption>
	| ReturnType<typeof getQuestion>
	| ReturnType<typeof addOption>
	| ReturnType<typeof deleteOption>
	| ReturnType<typeof addEtc>
	| ReturnType<typeof deleteEtc>
	| ReturnType<typeof updateOptionData>
	| ReturnType<typeof toggleRequired>;

export type QuestionState = IQuestion[];

const initialState: QuestionState = [
	{
		qid: nanoid(),
		title: "",
		optionId: 2,
		optionData: {
			options: [{ id: nanoid(), type: "option", text: "옵션 1" }],
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
		case GET_QUESTION:
			return state;
		case ADD_QUESTION:
			return [
				...state,
				{
					qid: action.payload.id,
					title: "",
					optionId: 2,
					optionData: {
						options: [{ id: nanoid(), type: "option", text: "옵션 1" }],
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
			state[action.payload.idx] = {
				...action.payload.question,
				title: action.payload.title,
			};
			return state;
		case CHANGE_QUESTION_OPTION:
			state[action.payload.idx] = {
				...action.payload.question,
				optionId: action.payload.optionId,
			};
			return state;
		case ADD_OPTION:
			state[action.payload.idx] = {
				...action.payload.question,
				optionData: {
					options: state[action.payload.idx].optionData.isEtcAdded
						? [
								...state[action.payload.idx].optionData.options.filter(
									(el) => el.type !== "etc"
								),
								{
									id: nanoid(),
									type: "option",
									text: `옵션 ${action.payload.optionIdx}`,
								},
								state[action.payload.idx].optionData.options.filter(
									(el) => el.type === "etc"
								)[0],
						  ]
						: [
								...state[action.payload.idx].optionData.options,
								{
									id: nanoid(),
									type: "option",
									text: `옵션 ${action.payload.optionIdx}`,
								},
						  ],
					isEtcAdded: state[action.payload.idx].optionData.isEtcAdded,
				},
			};
			return state;
		case DELETE_OPTION:
			state[action.payload.idx] = {
				...action.payload.question,
				optionData: {
					options: action.payload.optionList.filter((el) => {
						return el.id !== action.payload.deleteId;
					}),
					isEtcAdded: state[action.payload.idx].optionData.isEtcAdded,
				},
			};
			return state;
		case ADD_ETC:
			const addEtc_newOptionList = [
				...state[action.payload.idx].optionData.options,
				{
					id: nanoid(),
					type: "etc",
					text: "기타...",
				},
			];
			state[action.payload.idx] = {
				...action.payload.question,
				optionData: {
					options: addEtc_newOptionList,
					isEtcAdded: true,
				},
			};
			return state;
		case DELETE_ETC:
			state[action.payload.idx] = {
				...action.payload.question,
				optionData: {
					options: state[action.payload.idx].optionData.options.filter((el) => {
						return el.type !== "etc";
					}),
					isEtcAdded: false,
				},
			};
			return state;
		case UPDATE_QUESTION_OPTION_DATA:
			state[action.payload.idx].optionData.options[
				action.payload.optionListIdx
			].text = action.payload.updatedOptionText;
			return state;
		case TOGGLE_REQUIRED:
			state[action.payload.idx] = {
				...state[action.payload.idx],
				isRequired: action.payload.isRequired,
			};
			return state;
		default:
			return state;
	}
}

export default questionReducer;
