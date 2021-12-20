import axios from 'axios'

async function getdata(method, endpoint, parameter) {
    const options = {
        url: endpoint,
        method: method,
        baseURL: 'https://api.themoviedb.org/3',
        params: {
            api_key: parameter && parameter['api_key'] || 'da53fde37465a3704f99326877a0885f',
            language: parameter && parameter['language'] || 'ko-KR',
            page: 1,
            ...parameter
        }
    }

    console.log(options)
    
    try {
        var result = await axios(options)
    } catch (err) {
        console.log('axios error')
    }   

    return result
}

export default getdata