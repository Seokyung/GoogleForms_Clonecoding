import { nanoid } from "nanoid";
import { IQuestion } from "../../interfaces/IQuestion";
import {
	ADD_QUESTION,
	CHANGE_QUESTION_OPTION,
	CHANGE_QUESTION_TITLE,
	COPY_QUESTION,
	DELETE_QUESTION,
	addQuestion,
	changeQuestionOption,
	changeQuestionTitle,
	copyQuestion,
	deleteQuestion,
} from "../actions/question";

type QuestionAction =
	| ReturnType<typeof addQuestion>
	| ReturnType<typeof copyQuestion>
	| ReturnType<typeof deleteQuestion>
	| ReturnType<typeof changeQuestionTitle>
	| ReturnType<typeof changeQuestionOption>;

export type QuestionState = IQuestion[];

const initialState: QuestionState = [
	{
		qid: nanoid(),
		title: "",
		optionId: 2,
		optionData: {
			options: [{ id: nanoid(), text: "옵션 추가" }],
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
						options: [{ id: nanoid(), text: "옵션 추가" }],
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
		default:
			return state;
	}
}

export default questionReducer;
