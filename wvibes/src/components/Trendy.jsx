import {useEffect, useState} from 'react'
import { getTrendz, getRando, getPokemon, getAnimals } from '../services/zaWave-api'
import '../App.css'

export default function Trendz() {

    const [trendz, setTrendz] = useState([])

    const [loadingTrendz, setLoadingTrendz ] = useState(true)

    const [rando, setRando] = useState([])

    const [randoDisplay, setDisplay] = useState([])

    const [randoDescription, setDescription] = useState([])

    const [ani, setAni] = useState([])



    useEffect(() => {
        // setLoadingTrendz(true)
        getTrendz()
        .then(res => setTrendz(res.data.data))
        setLoadingTrendz(false)
    }, [loadingTrendz])

    useEffect(() => {
        getRando()
        .then(res => setRando(res.data.data.images.downsized_medium.url))
    }, [])

    useEffect(() => {
        getRando()
        .then(res => setDisplay(res.data.data.user.display_name))
    }, [])

    useEffect(() => {
        getRando()
        .then(res => setDescription(res.data.data.user.description))
    }, [])

    useEffect(() => {
        getAnimals()
        .then(res => setAni(res.data))
    }, [])

    console.log(ani)

    return (

        <div>

            <h2> ◕⩊◕ The Vibes ₍ ᐢ.ˬ.ᐢ₎˚ </h2>

                    <div className='vibes' > 

                        <div className = 'postII' >

                        <h2>
                            <img src = {'https://media.giphy.com/media/Jrl4FlTaymFFbNiwU5/giphy.gif'} className='pfp'/>
                            Giphy
                        </h2>
                        
                        <img src = {rando} width = '380' height = '400'/>
                        <h3> {randoDisplay + '. ' + randoDescription} </h3>

                        </div>

                    

                    <div className = 'animals'>

                        {ani.map ((animal, index) => {
                            return (


                                <div className = 'postII' key = {index}>
                                <h2>
                                    <img src = {animal.image_link} className='pfp'/>
                                    Animales
                                </h2>
                                <img src = {animal.image_link} width = '380' height = '400' />
                                <h3>
                                    Here is a {animal.name}, also known as a {animal.latin_name}. You can find these {animal.animal_type}s in {animal.geo_range} near {animal.habitat}. They live for about {animal.lifespan} years and can weight as much as {animal.weight_max}lbs. Their diet consist of {animal.diet}. 
                                </h3>
     
                            </div>
                            )
                        })}
                    </div>


                    </div>



    </div> 
    )
}