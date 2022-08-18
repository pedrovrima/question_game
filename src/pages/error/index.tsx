import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { StoreContext } from "../../context"
import { Button, Text } from "../../components"

export default function Loading() {
    const {setError} = useContext(StoreContext)
    const navigate = useNavigate()
    return (
        <div>
            <Text>Oops! An error ocurred. Would you like to retry?</Text>
            <Button onClick={() => {setError(false);navigate("/loading",{replace:true})}}>Retry</Button>
        </div>
    )
}