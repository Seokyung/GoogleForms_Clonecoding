import { ITitle } from "../../interfaces/ITitle";
import {
	CHANGE_DESCRIPTION,
	CHANGE_TITLE,
	SET_TITLE_DATA,
	changeDescription,
	changeTitle,
	setTitleData,
} from "../actions/title";

type TitleAction =
	| ReturnType<typeof setTitleData>
	| ReturnType<typeof changeTitle>
	| ReturnType<typeof changeDescription>;

export type TitleState = ITitle;

const initialState: TitleState = {
	title: "제목 없는 설문지",
	description: "",
};

function titleReducer(state: TitleState = initialState, action: TitleAction) {
	switch (action.type) {
		case SET_TITLE_DATA:
			return action.payload.titleData;
		case CHANGE_TITLE:
			return { title: action.payload.title, description: state.description };
		case CHANGE_DESCRIPTION:
			return { title: state.title, description: action.payload.description };
		default:
			return state;
	}
}

export default titleReducer;
