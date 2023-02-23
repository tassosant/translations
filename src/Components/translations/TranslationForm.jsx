import { useForm } from "react-hook-form";
import { useState } from "react";
import { IndividualSignImageItem } from "./IndividualSignImageItem";
import {IndividualSignImages} from './IndividualSignImages';
import { translationSentenceAdd } from "../../api/translations";
import { useUser } from "../../context/UserContext";
import { storageSave } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKeys";


const TranslationForm = () =>{

    const {register, handleSubmit, formState:{errors}} = useForm()
    const [displaySignatureItems, setDisplaySignatureItems] = useState(false)
    const [translation_sentence, setTranslationSetence] = useState(null) 
    const {user, setUser} = useUser()
    //Validates that is not symbols or numbers or not null, display proper message
    const validateTranslationSentence = (translation_sentence)=>{
        return true
    }

    // const onSubmit = ({translation_sentence}) =>{
        
    //     // if(validateTranslationSentence(translation_sentence)){
    //     //     //we can destroy previous rendered components by assigning a key value
            
    //     //     //savetext (to local storage??) and fetch them to API
    //     //     handleSentence(translation_sentence)
    //     //     setDisplaySignatureItems(true)
    //     // }
    //     // else{
    //         //     setDisplaySignatureItems(false)
    //         // } 
            
    //     }
        
        const handleSentence = async ({translation_sentence}) =>{
            if(validateTranslationSentence(translation_sentence)){
                setTranslationSetence(translation_sentence)
                setDisplaySignatureItems(true)
            }else{
                setDisplaySignatureItems(false)
                return
            }
        console.log(translation_sentence)
        const[error, updatedUser] = await translationSentenceAdd(user, translation_sentence)
        console.log('Error', error);
        console.log('Result', updatedUser);
        // Keep UI state and server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        //the call of function setUser(updatedUser) is necessary to push the last value of the translations because if we don't do that, it will only update the last value of translations
        //update context state
        setUser(updatedUser)
    }

    return(
        <div className="translation-form box">
            <div className="translation-form box input-sentence">
                <form onSubmit={handleSubmit(handleSentence)}>
                    <fieldset>
                        <label htmlFor="translation-sentence">Translations sentence</label>
                        <input type="text" {...register('translation_sentence')}/>
                    </fieldset>
                    <button type='submit'>Translate</button>
                </form>
            </div>
            <div className="translation-form box translation-images">
                <div className="translation-images list">
                    {displaySignatureItems && <IndividualSignImages sentence={translation_sentence}></IndividualSignImages>}
                </div>
            </div>
        </div>
    )
}

export default TranslationForm