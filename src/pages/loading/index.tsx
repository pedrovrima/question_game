import { useEffect, useContext } from "react"
import { Text } from "../../components"
import { StoreContext } from "../../context"

export default function Loading() {
    const { loadQuestions } = useContext(StoreContext)
    useEffect(()=>{console.log("render")},[])
    loadQuestions()
    return (
        <div className="flex h-full flex-col justify-center">
            <Text>Loading...</Text>
        </div>
    )
}