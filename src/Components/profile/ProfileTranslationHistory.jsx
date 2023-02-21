import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({translations})=>{
    //needs modifying to display the last 10 translations
    const translationList = translations.map(translation=><ProfileTranslationHistoryItem key = {translation} item={translation}/>)
    return(
        <section>
            <h4>Your translation history</h4>
            <ul>
                {translationList}
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory