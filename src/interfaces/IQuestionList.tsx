export interface IQuestionList {
	qid: string;
	title: string;
	optionId: number;
	optionData?: object;
	isRequired: boolean;
}
