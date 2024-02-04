import { IQuestion } from "../../interfaces/IQuestion";

export const DELETE_OPTION = "option/DELETE_OPTION" as const;
export const UPDATE_OPTION_TEXT = "option/CHANGE_OPTION_TEXT" as const;

// export const ADD_ETC = "option/ADD_ETC" as const;
export const DELETE_ETC = "option/DELETE_ETC" as const;

export const deleteOption = (question: IQuestion, deleteId: string) => ({
	type: DELETE_OPTION,
	payload: {
		deleteId: deleteId,
		options: question.optionData.options,
		isEtcAdded: question.optionData.isEtcAdded,
	},
});

export const updateOption = (
	question: IQuestion,
	optionIdx: number,
	updatedText: string
) => ({
	type: UPDATE_OPTION_TEXT,
	payload: {
		question: question,
		optionIdx: optionIdx,
		updatedText: updatedText,
		optionList: question.optionData.options,
		isEtcAdded: question.optionData.isEtcAdded,
	},
});

// export const addEtc = (question: IQuestion) => ({
// 	type: ADD_ETC,
// 	payload: {
// 		question: question,
// 		optionList: question.optionData.options,
// 	},
// });

export const deleteEtc = (question: IQuestion) => ({
	type: DELETE_ETC,
	payload: {
		question: question,
		optionList: question.optionData.options,
	},
});
