export type Questions ={
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[]
}


export default async function getQuestions():Promise <Questions[]> {
    try{
    const fetchResult = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    const questions = await fetchResult.json()
    return questions.results
    }catch(e){
        return []
    }
}

