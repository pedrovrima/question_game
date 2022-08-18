

export function answerSignal  (answer: boolean) { return answer ? "+" : "-"}



// Text received thorugh the API contians HTML entities (e.g. &quot; to reptresent "); 
// The function parseHtmlEntitites creates a html element and adds the string to it, parsing any entity into the character they represent. 
// The function then extracts the text from the html element and returns it. 

export function parseHtmlEntities(str:string) {
    var txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
}

export function booleanSum  (values: boolean[]) {return values.reduce((total: number, value: boolean) => +value + total, 0)}
