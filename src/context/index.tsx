import React, { useState, } from "react"
import getQuestions from "../api/getQuestions";
import { Questions, StoreType, StoreProps} from "../types"





export const StoreContext = React.createContext<StoreType>({ questions: [], error: false, currentQuestionIndex: 0, answers: [], loadQuestions: () => { }, nextQuestion: () => { }, resetContext: () => { }, setError: () => { } })

export default function ContextStore(props: StoreProps) {

    const { children } = props


    const [questions, setQuestions] = useState<Questions[]>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)
    const [answers, setAnswers] = useState<boolean[]>([])





    const loadQuestions = async (): Promise<void> => {
        console.log("here")
        const loadedQuestions = await getQuestions()
        if (loadedQuestions.length > 0) {
            setQuestions(loadedQuestions)
        } else {
            console.log("here2")
            setError(true)
        }

    }


    const nextQuestion = (answer: string): void => {
        setAnswers(answers => [...answers, answer === questions[currentQuestionIndex].correct_answer])
        setCurrentQuestionIndex((currentQuestionIndex) => currentQuestionIndex + 1)
    }


    const resetContext = (): void => {
        setAnswers([])
        setCurrentQuestionIndex(0)
        setQuestions([])
    }


    const store = { questions, currentQuestionIndex, error, answers, loadQuestions, nextQuestion, resetContext, setError }

    return (<StoreContext.Provider value={store} > {children} </StoreContext.Provider>)

}


