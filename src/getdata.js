import axios from 'axios'

async function getdata(method, endpoint) {
    const options = {
        url: endpoint,
        method: method,
        baseURL: 'https://api.themoviedb.org/3',
        params: {
            api_key: 'da53fde37465a3704f99326877a0885f',
            language: 'ko-KR',
            page: 2
        }
    }

    
    try {
        var result = await axios(options)
    } catch (err) {
        console.log('axios error')
    }   

    return result
}

export default getdata