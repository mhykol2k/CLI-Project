import axios from 'axios'
import config from '../../config.json'

export const getProjects = async () => {
    const { data } = await axios.get(
        `
        \n
        https://api.github.com/users/mhykol2k/repos`,
    )
    return data
}

export const getReadme = async () => {
    const { data } = await axios.get(config.readmeUrl)
    return data
}

export const getQuote = async () => {
    const { data } = await axios.get('https://api.quotable.io/random')
    return {
        quote: `"${data.content}" - ${data.author}`
    }
}

export const getPokemon = async () => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    
    return {
        name: `name: "${data.name}" \nid: ${data.id} \nheight: ${data.height} \nweight: ${data.weight}`
    }
}
//Pokemon API
//Random