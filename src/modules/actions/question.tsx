import { nanoid } from "nanoid";
import { IQuestion } from "../../interfaces/IQuestion";
import { IOptionData } from "../../interfaces/IOptionData";

// QuestionList
export const ADD_QUESTION = "question/ADD_QUESTION" as const;
export const COPY_QUESTION = "question/COPY_QUESTION" as const;
export const DELETE_QUESTION = "question/DELETE_QUESTION" as const;

export const CHANGE_QUESTION_TITLE = "question/CHANGE_QUESTION_TITLE" as const;
export const CHANGE_QUESTION_OPTION =
	"question/CHANGE_QUESTION_OPTION" as const;

// OptionList
export const ADD_OPTION = "question/ADD_OPTION" as const;
export const DELETE_OPTION = "question/DELETE_OPTION" as const;
export const ADD_ETC = "question/ADD_ETC" as const;

export const UPDATE_QUESTION_OPTION_DATA =
	"question/UPDATE_QUESTION_OPTION_DATA" as const;

export const TOGGLE_REQUIRED = "question/TOGGLE_REQUIRED" as const;

// QuestionList
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

// OptionList
export const addOption = (
	questionIdx: number,
	question: IQuestion,
	optionIdx: number
) => ({
	type: ADD_OPTION,
	payload: {
		idx: questionIdx,
		question: question,
		optionIdx: optionIdx,
	},
});

export const deleteOption = (
	questionIdx: number,
	question: IQuestion,
	deleteId: string
) => ({
	type: DELETE_OPTION,
	payload: {
		idx: questionIdx,
		question: question,
		deleteId: deleteId,
	},
});

export const addEtc = (questionIdx: number, question: IQuestion) => ({
	type: ADD_ETC,
	payload: {
		idx: questionIdx,
		question: question,
	},
});

export const updateQuestionOptionData = (
	questionIdx: number,
	question: IQuestion,
	updatedData: IOptionData
) => ({
	type: UPDATE_QUESTION_OPTION_DATA,
	payload: {
		idx: questionIdx,
		question: question,
		updatedData: updatedData,
	},
});

export const toggleRequired = (
	questionIdx: number,
	changedRequired: boolean
) => ({
	type: TOGGLE_REQUIRED,
	payload: {
		idx: questionIdx,
		isRequired: changedRequired,
	},
});
