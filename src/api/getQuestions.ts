import { Questions } from "../types"

export default async function getQuestions():Promise <Questions[]> {
    try{
    const fetchResult = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    const questions = await fetchResult.json()
    return questions.results
    }catch(e){
        return []
    }
}

