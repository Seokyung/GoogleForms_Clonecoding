import { nanoid } from "nanoid";

export const ADD_QUESTION = "question/ADD_QUESTION" as const;
export const COPY_QUESTION = "question/COPY_QUESTION" as const;
export const DELETE_QUESTION = "question/DELETE_QUESTION" as const;

export const addQuestion = () => ({
	type: ADD_QUESTION,
	payload: {
		id: nanoid(),
	},
});

export const copyQuestion = () => ({
	type: COPY_QUESTION,
	payload: {},
});

export const deleteQuestion = () => ({
	type: DELETE_QUESTION,
	payload: {},
});
