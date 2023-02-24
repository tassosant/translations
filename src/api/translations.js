import { createHeaders } from "."
const apiUrl = process.env.REACT_APP_API_URL
//update the translations sentence by fetching the new one
//clearout history
// display 10 last translations(so the 10 last elements of translations array)
export const translationSentenceAdd = async (user,translation_sentence)=>{
    
    if (translation_sentence != "" && translation_sentence != null)
    {
        try{
            const response =  await fetch(`${apiUrl}/${user.id}`,{
                method:'PATCH',
                headers: createHeaders(),
                body: JSON.stringify({
                    //username: user.username,
                    //this translations:[...user.translations, translation_sentence] means that we create an array of translations.
                    //To be more specific we pull the user.translations values with ...user.translations and push in the new array the new translation sentence
                    //after that we save it to user by using setUser function in the page we called this translationSentenceAdd function
                    //
                    translations:[...user.translations, translation_sentence]
                    // translations.push(translation_sentence)
                })
            })
            if(!response.ok){
                throw new Error('Could not update the translations')
            }
            const result = await response.json()
            return [null, result]
        }
        catch(error){
            return [error.message, null]
        }
    }
}

export const translationClearHistory = async (user)=>{
    try{
        const response = await fetch(`${apiUrl}/${user.id}`,{
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations:[...filterArray(user.translations, 10)]
            })
        })
        if(!response.ok){
            throw new Error('Could not update the translations')
        }
        const result = await response.json()
        return [null, result]
    }catch(error){
        return [error.message, null]
    }
}

//this is a function to delete the 10 most recent objects
function filterArray(sourceArray=[], numberOfItems){
    if(numberOfItems>=sourceArray.length){
        return [];
    }
    let outputArray=[]
    outputArray = [...sourceArray.filter((sentence, index,sourceArray)=>{
        if(index < sourceArray.length - numberOfItems)
            return sourceArray[index];
    })]
    // console.log("outputArray:",outputArray);
    return outputArray;
}