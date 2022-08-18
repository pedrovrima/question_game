import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context'
import { Heading, Button, Text } from '../../components'

export default function Home(props: any) {
    return (<>
        <Heading >Welcome to the Trivia Challenge!</Heading>
        <Text>You will be presented with 10 True or False questions. <br /> Can you score 100%?</Text>
        <HomeButtons />
    </>)
}



const HomeButtons = () => {
    const { answers, resetContext } = useContext(StoreContext)
    const navigate = useNavigate()

    if (answers.length > 0) {
        return (<div>
            <Button onClick={() => { navigate("/game") }} >CONTINUE</Button>
            <Button onClick={() => { resetContext(); navigate("/loading") }} >RESTART</Button>
        </div>)
    }

    return <Button onClick={() => { navigate("/loading") }} >BEGIN</Button>



}
