export type Questions ={
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[]
}

export type ComponentProps={
    children:React.ReactNode;
    onClick?: () => void;
    className?: string;
}


export type StoreType = {
    questions: Questions[];
    currentQuestionIndex: number;
    error: boolean;
    answers: boolean[];
    loadQuestions: Function;
    nextQuestion: (answer: string) => void;
    resetContext: Function;
    setError: Function;

}

export type StoreProps = {
    children: React.ReactNode;
}

export type AnswerProps = {
    question: Questions;
    index: number
}
