import { IndividualSignImageItem } from "./IndividualSignImageItem";

export const IndividualSignImages = ({sentence})=>{

    
    const handleSentence = (sentence)=>{
        //we have to put keys so in re-rendering the previous components will be destroyed
        let keyValue = 0;
        
        const wordList = sentence.split(/\W/).map(word=>{return handleWord(word,keyValue++)})
        // console.log(wordList)
        return wordList;
    }
    
    const handleWord = (word, keyValue)=>{
        return word.split("").map((letter)=>{return <IndividualSignImageItem key={letter.concat(keyValue++)} imageItem={`${letter}.png`}/>})
    }
    
    return(
        <>
        
        {handleSentence(sentence)}
        
        </>
    )
}