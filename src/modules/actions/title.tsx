import { ITitle } from "../../interfaces/ITitle";

export const SET_TITLE_DATA = "title/SET_TITLE_DATA" as const;
export const CHANGE_TITLE = "title/CHANGE_TITLE" as const;
export const CHANGE_DESCRIPTION = "title/CHANGE_DESCRIPTION" as const;

export const setTitleData = (titleData: ITitle) => ({
	type: SET_TITLE_DATA,
	payload: {
		titleData,
	},
});

export const changeTitle = (changedTitle: string) => ({
	type: CHANGE_TITLE,
	payload: { title: changedTitle },
});

export const changeDescription = (changedDescription: string) => ({
	type: CHANGE_DESCRIPTION,
	payload: { description: changedDescription },
});
