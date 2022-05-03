import axios from 'axios'

const URL = 'http://localhost:3003/wavez/'

//gifs api 
const TrendzUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=gJPnCRbyzlymPwgMOfgUm8bBMTDXZSqJ&limit=5'
const RandoUrl = `https://api.giphy.com/v1/gifs/random?api_key=gJPnCRbyzlymPwgMOfgUm8bBMTDXZSqJ`

//Rick and Morty api 
const Rick = 'https://zoo-animal-api.herokuapp.com/animals/rand/10'
// 'https://rickandmortyapi.com/api/character/'

//pokemon api
const Pokemon = 'https://pokeapi.co/api/v2/pokemon/'



export const getRick = () => {

    const response = axios.get(Rick)
    return response

}

export const getPosts = () => {

    const response = axios.get(URL)
    console.log(response)
    return response

}

export const getPost = (id) => {

    const response = axios.get(URL + id)
    console.log(response)
    return response

}

export const getProfile = (id) => {

    const response = axios.get(URL + id)
    console.log(response)
    return response 
}

export const uploadPost = (add) => {

    const response = axios.post(URL, add)
    return response 
}

export const editPost = (id, updatedPost) => {

    const repsonse = axios.put(URL + id, updatedPost)
    return repsonse
}

export const deletePost = (id) => {

    const response = axios.delete(URL + id)
    return response
    
}


export const getTrendz = () => {

    const response = axios.get(TrendzUrl)
    return response

}

export const getRando = () => {

    const response = axios.get(RandoUrl)
    console.log(response)
    return response 
    
}

export const getPokemon = () => {

    const response = axios.get(Pokemon)
    return response

}
