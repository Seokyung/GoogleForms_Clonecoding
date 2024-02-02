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

type QuestionState = { questionList: IQuestion[] };

const initialState: QuestionState = { questionList: [] };

function questionReducer(
	state: QuestionState = initialState,
	action: QuestionAction
) {
	switch (action.type) {
		case ADD_QUESTION:
			return {};
		case COPY_QUESTION:
			return {};
		case DELETE_QUESTION:
			return {};
		default:
			return state;
	}
}

export default questionReducer;
