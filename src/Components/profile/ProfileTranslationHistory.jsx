import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"


const returnLastItems = (translations,items)=>{
    //the argument items is the number of items we want to display
    let translationsToReturn = [];
    //if the numebr of items is smaller than the length of translations array set items to length of array
    if(translations.length<items){
        items = translations.length
    }
    for(let index = translations.length-1;index >= translations.length-items; index--){
        translationsToReturn.push(translations[index])
    }
    return translationsToReturn
}


const ProfileTranslationHistory = ({translations})=>{
    //needs modifying to display the last 10 translations(done)
    //displays the last 10 translations
    const translationHistory = returnLastItems(translations, 10)
    // const translationList = translationHistory.map(translation=><ProfileTranslationHistoryItem key = {translation} item={translation}/>)
    const translationList = translationHistory.map((translation,index)=><ProfileTranslationHistoryItem key = {translation.concat(index)} item={translation}/>)
    return(
        <div className="translation-history-item">
        <section>
            <h4 id="history-header">Your translation history</h4>
            <ul id="translation-list">
                {translationList}
            </ul>
        </section>
        </div>
    )
}
export default ProfileTranslationHistory