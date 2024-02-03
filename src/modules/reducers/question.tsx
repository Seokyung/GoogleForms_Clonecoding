import { nanoid } from "nanoid";
import { IQuestion } from "../../interfaces/IQuestion";
import {
	ADD_QUESTION,
	COPY_QUESTION,
	DELETE_QUESTION,
	addQuestion,
	copyQuestion,
	deleteQuestion,
} from "../actions/question";

type QuestionAction =
	| ReturnType<typeof addQuestion>
	| ReturnType<typeof copyQuestion>
	| ReturnType<typeof deleteQuestion>;

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
			const prevQuestionList = state.slice(0, action.payload.idx + 1);
			const nextQuestionList = state.slice(action.payload.idx + 1);
			return [
				...prevQuestionList,
				{
					...action.payload.question,
					qid: nanoid(),
				},
				...nextQuestionList,
			];
		case DELETE_QUESTION:
			return state;
		default:
			return state;
	}
}

export default questionReducer;
