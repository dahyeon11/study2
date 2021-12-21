function validationTest(data, type) {
    if(!data) {
        //console.log('1st false')
        return false 
    }
    
    let optionsMovie = ['backdrop_path', 'id', 'poster_path', 'popularity', 'poster_path', 'release_date', 'title', 'overview']
    let optionsTv = ['id', 'backdrop_path', 'poster_path', 'first_air_date', 'genre_ids', 'origin_country']

    let options = []

    if(type === 'tv') {
        options = optionsTv.slice(0)
    } else {
        options = optionsMovie.slice(0)
    }

    options.forEach(element => {
        if(!data[element]){
            //console.log('2nd true')
            return false
        }
    });

    //console.log('3rd false')
    return true
    
}

export default validationTest