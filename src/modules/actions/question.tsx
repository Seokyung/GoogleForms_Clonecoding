import { nanoid } from "nanoid";
import { IQuestion } from "../../interfaces/IQuestion";

export const ADD_QUESTION = "question/ADD_QUESTION" as const;
export const COPY_QUESTION = "question/COPY_QUESTION" as const;
export const DELETE_QUESTION = "question/DELETE_QUESTION" as const;

export const CHANGE_QUESTION_TITLE = "question/CHANGE_QUESTION_TITLE" as const;
export const CHANGE_QUESTION_OPTION =
	"question/CHANGE_QUESTION_OPTION" as const;

export const ADD_OPTION = "question/ADD_OPTION" as const;
export const CHANGE_OPTION_TEXT = "question/CHANGE_OPTION_TEXT" as const;
export const DELETE_OPTION = "question/DELETE_OPTION" as const;

export const ADD_ETC = "question/ADD_ETC" as const;
export const TOGGLE_ETC = "question/TOGGLE_ETC" as const;

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

export const changeQuestionTitle = (
	questionIdx: number,
	question: IQuestion,
	changedTitle: string
) => ({
	type: CHANGE_QUESTION_TITLE,
	payload: {
		idx: questionIdx,
		question: question,
		title: changedTitle,
	},
});

export const changeQuestionOption = (
	questionIdx: number,
	question: IQuestion,
	changedOptionId: number
) => ({
	type: CHANGE_QUESTION_OPTION,
	payload: {
		idx: questionIdx,
		question: question,
		optionId: changedOptionId,
	},
});

export const addOption = (
	questionIdx: number,
	question: IQuestion,
	optionIdx: number
) => ({
	type: ADD_OPTION,
	payload: {
		questionIdx: questionIdx,
		question: question,
		optionIdx: optionIdx,
		optionList: question.optionData.options,
		isEtcAdded: question.optionData.isEtcAdded,
	},
});

export const updateOption = () => ({
	type: CHANGE_OPTION_TEXT,
	payload: {},
});

export const deleteOption = () => ({
	type: DELETE_OPTION,
	payload: {},
});

export const addEtc = (questionIdx: number, question: IQuestion) => ({
	type: ADD_ETC,
	payload: {
		questionIdx: questionIdx,
		question: question,
		optionList: question.optionData.options,
	},
});

export const toggleEtc = (
	questionIdx: number,
	question: IQuestion,
	isEtcAdded: boolean
) => ({
	type: TOGGLE_ETC,
	payload: {
		questionIdx: questionIdx,
		question: question,
		optionList: question.optionData.options,
		isEtcAdded: isEtcAdded,
	},
});
