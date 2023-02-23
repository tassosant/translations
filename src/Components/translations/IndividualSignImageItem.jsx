
export const IndividualSignImageItem = ({imageItem})=>{
    //imageSrcFolder = "../../Images/Individual_signs";
    //imageItem='a.png';
    let imageSrc = '/Images/Individual_signs/';
    
    return(
        <div className="individual-signs-item">
        
            {/* <img src={require(imageSrc.concat(imageItem))} alt="somePNG"/> */}
            <img src={`${imageSrc}${imageItem}`}  alt="IndividualSignItem"/>
        
        </div>
    )
   
}