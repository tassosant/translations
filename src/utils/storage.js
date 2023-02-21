

export const storageSave = (key, value)=>{
    //On normal circumstances we do not want to store the user like this becaus ewe do not wnat to expose the index
    //One solution is to receive a token from the API where to store it somewhere and the token would identify the user 
    localStorage.setItem(key,JSON.stringify(value))
}

export const storageRead = key =>{
    const data = localStorage.getItem(key)
    if(data){
        return JSON.parse(data)
    }
    return null
}

export const storageDelete = key =>[
    localStorage.removeItem(key)
]