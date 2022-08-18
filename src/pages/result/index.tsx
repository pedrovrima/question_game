import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { Questions } from "../../api/getQuestions"
import { Button, Heading, Text } from "../../components"
import { StoreContext } from "../../context"
import { answerSignal, parseHtmlEntities } from "../../functions"

const sums = (values: boolean[]) => values.reduce((total: number, value: boolean) => +value + total, 0)


export default function Results() {
    const { questions, answers, resetContext } = useContext(StoreContext)
    const navigate = useNavigate()


    const clickHandler = () => {
        resetContext()
        navigate("/")
    }

    return (
        <>

            <Heading>
                You scored <br/> {sums(answers)}/10
            </Heading>

            <AnswerList answers={answers} questions={questions}></AnswerList>
            <Button onClick={clickHandler}>PLAY AGAIN?</Button>
        </>
    )
}



type AnswerListProps = {
    answers: boolean[];
    questions: Questions[];
}

const AnswerList = (props: AnswerListProps) => {
    const { answers, questions } = props
    return (
        <div className="grid grid-cols-8 p-2 w-full text-left md:w-3/4 text-gray-500">
            {questions.map((question, index) => (
                <React.Fragment key={question.question}>
                    <div className="flex mb-8 flex-col align-middle justify-center">
                        <Text className="mb-0 md:mb-0 text-4xl md:text-4xl font-bold">{answerSignal(answers[index])}</Text>
                    </div>
                    <div className="col-span-7 mb-8 flex flex-col justify-center">
                        <Text className="mb-0 md:mb-0">{parseHtmlEntities(question.question)}</Text>
                    </div>
                </React.Fragment>
            )



            )}
        </div>
    )

}



