import { IOptionData } from "./IOptionData";

export interface IQuestion {
	qid: string;
	title: string;
	optionId: number;
	optionData: IOptionData;
	isRequired: boolean;
}
