import { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./home"
import Loading from "./loading"
import Game from "./game"
import Results from "./result"
import Error from "./error"
import { StoreContext } from "../context"
import {Container} from "../components"

export default function Pages() {
    return (
        <Container>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loading" element={<LoadRouting/>} />
                <Route path="/error" element={<Error />} />
                <Route path="/game" element={<GameRouting />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Container>
    )


}




const LoadRouting = () => {
    const { error, questions } = useContext(StoreContext)

    if (error) {
        return <Navigate to="/error" replace={true} />
    }
    if (questions.length > 0) {
        console.log(questions)
      return  <Navigate to="/game" replace={true} />
    }

    return <Loading />
}



const GameRouting = () => {
    const { questions, currentQuestionIndex } = useContext(StoreContext)

    if (currentQuestionIndex > 9) {
        return <Navigate to="/results" replace={true} />
    }

// This avoids users to navigate straight to /game, without passing by the loading stage
    if (questions.length > 0) {
        return <Game />
    }


    return <Navigate to="/" replace={true} />
}