import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"


const returnLastItems = (translations,items)=>{
    let translationsToReturn = [];
    if(translations.length<items){
        items = translations.length
    }
    for(let index = translations.length-1;index >= translations.length-items; index--){
        translationsToReturn.push(translations[index])
    }
    return translationsToReturn
}


const ProfileTranslationHistory = ({translations})=>{
    //needs modifying to display the last 10 translations
    const translationHistory = returnLastItems(translations, 10)
    const translationList = translationHistory.map(translation=><ProfileTranslationHistoryItem key = {translation} item={translation}/>)
    return(
        <div className="profile item translation-history">
        <section>
            <h4>Your translation history</h4>
            <ul>
                {translationList}
            </ul>
        </section>
        </div>
    )
}
export default ProfileTranslationHistory