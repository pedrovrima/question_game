import { useEffect, useContext } from "react"
import { Button, GameCard, Heading, Text, TextSmall } from "../../components"
import { StoreContext } from "../../context"
import { parseHtmlEntities } from "../../functions"

export default function Loading() {
    const { questions, nextQuestion, currentQuestionIndex } = useContext(StoreContext)


    const questionText = parseHtmlEntities(questions[currentQuestionIndex].question)


    return (
        <div className="w-full flex flex-col items-center">
            <Heading className="min-h-24">{questions[currentQuestionIndex].category}</Heading>
            <div className="w-full md:w-2/3 ">
                <GameCard>
                    <Text>
                        {questionText}
                    </Text>
                    <div>
                        <Button onClick={() => nextQuestion("True")} >True</Button>
                        <Button onClick={() => nextQuestion("False")} >False</Button>
                    </div>
                </GameCard>

                <TextSmall>{`${currentQuestionIndex + 1} of ${questions.length}`}</TextSmall>
            </div>
        </div>
    )
}