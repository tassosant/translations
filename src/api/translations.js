import { createHeaders } from "."
const apiUrl = process.env.REACT_APP_API_URL
//update the translations sentence by fetching the new one
//clearout history
// display 10 last translations(so the 10 last elements of translations array)
export const translationSentenceAdd = async (user,translation_sentence)=>{
    
    try{
        const response =  await fetch(`${apiUrl}/${user.id}`,{
            method:'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                //username: user.username,
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

export const translationClearHistory = async (userId)=>{
    try{
        const response = await fetch(`${apiUrl}/${userId}`,{
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations:[]
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