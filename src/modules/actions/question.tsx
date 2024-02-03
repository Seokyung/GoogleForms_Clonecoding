import { nanoid } from "nanoid";
import { IQuestion } from "../../interfaces/IQuestion";

export const ADD_QUESTION = "question/ADD_QUESTION" as const;
export const COPY_QUESTION = "question/COPY_QUESTION" as const;
export const DELETE_QUESTION = "question/DELETE_QUESTION" as const;

export const addQuestion = () => ({
	type: ADD_QUESTION,
	payload: {
		id: nanoid(),
	},
});

export const copyQuestion = (
	questionIdx: number,
	copiedQuestion: IQuestion
) => ({
	type: COPY_QUESTION,
	payload: {
		idx: questionIdx,
		question: copiedQuestion,
	},
});

export const deleteQuestion = (deletedId: string) => ({
	type: DELETE_QUESTION,
	payload: {
		id: deletedId,
	},
});
