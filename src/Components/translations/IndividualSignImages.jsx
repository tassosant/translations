import { IndividualSignImageItem } from "./IndividualSignImageItem";

export const IndividualSignImages = ({sentence})=>{

    //with this function I call handleWord
    //Analytically: Let's suppose the writes a sentence, we have to ignore all symbols etc, we ignore them by using split(/\W|_/g) where \W is the regex for NON word character and _ the regex for underscore symbol as the non word character does not count the _ symbol
    //After that for every word we call another funciton to handle every word, so we can capture the img for every letter
    const handleSentence = (sentence)=>{
        //we have to put keys so in re-rendering the previous components will be destroyed
        let keyValue = 0;
        //we increment the key value with a prefixed letter to avoi same keys. 
        const wordList = sentence.split(/\W|_/g).map(word=>{return handleWord(word,keyValue++)})
        console.log(wordList)
        return wordList;
    }
    
    const handleWord = (word, keyValue)=>{
        return word.split("").map((letter)=>{return <IndividualSignImageItem key={letter.concat(keyValue++)} imageItem={`${letter.toLowerCase()}.png`}/>})
    }
    
    return(
        <>
        {/* we need to return a list of individual sign images, first I call the handle sentence function*/}
        {handleSentence(sentence)}
        
        </>
    )
}