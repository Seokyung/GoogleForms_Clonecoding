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

const questionReducer = (
	state: QuestionState = initialState,
	action: QuestionAction
) => {
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
			return state;
		case DELETE_QUESTION:
			return state;
		default:
			return state;
	}
};

export default questionReducer;
