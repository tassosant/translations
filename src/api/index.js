const apiKey = process.env.REACT_APP_API_KEY

export const createHeaders = () =>{
    // console.log(apiKey)
    return {
        'Content-Type' : 'application/json',
        'x-api-key' : apiKey
    }
}


