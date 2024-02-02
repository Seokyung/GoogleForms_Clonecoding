import { IOptionData } from "./IOptionData";

export interface IQuestionList {
	qid: string;
	title: string;
	optionId: number;
	optionData?: IOptionData;
	isRequired: boolean;
}
