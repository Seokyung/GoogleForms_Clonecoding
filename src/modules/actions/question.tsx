export const ADD_QUESTION = "question/ADD_QUESTION" as const;
export const COPY_QUESTION = "question/COPY_QUESTION" as const;
export const DELETE_QUESTION = "question/DELETE_QUESTION" as const;

export const addQuestion = () => ({ type: ADD_QUESTION });
export const copyQuestion = () => ({ type: COPY_QUESTION });
export const deleteQuestion = () => ({ type: DELETE_QUESTION });
