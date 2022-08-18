import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AnswerProps} from "../../types"
import { Button, Heading, Text } from "../../components"
import { StoreContext } from "../../context"
import { answerSignal, parseHtmlEntities, booleanSum } from "../../functions"



export default function Results() {
    const { answers, resetContext } = useContext(StoreContext)
    const navigate = useNavigate()


    const clickHandler = () => {
        resetContext()
        navigate("/")
    }

    return (
        <>

            <Heading>
                You scored <br /> {booleanSum(answers)}/10
            </Heading>
            <AnswerList />
            <Button onClick={clickHandler}>PLAY AGAIN?</Button>
        </>
    )
}



const AnswerList = () => {
    const { questions } = useContext(StoreContext)
    return (
        <div className="grid grid-cols-8 p-2 w-full text-left md:w-3/4 text-gray-500">
            {questions.map((question, index) => 
                <AnswerResult question={question} index={index}></AnswerResult> 
            )}
        </div>
    )

}




const AnswerResult = ({ question, index }: AnswerProps) => {
    const { answers } = useContext(StoreContext)

    return (
        <React.Fragment key={question.question}>
            <div className="flex mb-8 flex-col align-middle justify-center">
                <Text className="mb-0 md:mb-0 text-4xl md:text-4xl font-bold">{answerSignal(answers[index])}</Text>
            </div>
            <div className="col-span-7 mb-8 flex flex-col justify-center">
                <Text className="mb-0 md:mb-0">{parseHtmlEntities(question.question)}</Text>
            </div>
        </React.Fragment>
    )

}