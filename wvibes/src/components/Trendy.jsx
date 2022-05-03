import {useEffect, useState} from 'react'
import { getTrendz, getRando, getPokemon } from '../services/zaWave-api'
import '../App.css'

export default function Trendz() {

    const [trendz, setTrendz] = useState([])

    const [loadingTrendz, setLoadingTrendz ] = useState(true)

    const [rando, setRando] = useState([])

    const [randoDisplay, setDisplay] = useState([])

    const [randoDescription, setDescription] = useState([])

    const [pokemon, setPokemon] = useState([])



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
        getPokemon()
        .then(res => setPokemon(res.data))
    }, [])

    console.log(trendz)
    console.log(pokemon)

    return (

        <div>

            <h2> ◕⩊◕ The Vibes ₍ ᐢ.ˬ.ᐢ₎˚ </h2>

                    <div className='vibes' > 

                        <div className = 'post' >

                        <h3>
                            <img src = {'https://media.giphy.com/media/Jrl4FlTaymFFbNiwU5/giphy.gif'} className='pfp'/>
                            Giphy
                        </h3>
                        
                        <img src = {rando} width = '380' height = '400'/>
                        <h3> {randoDisplay + '. ' + randoDescription} </h3>

                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus necessitatibus vitae quasi rem reprehenderit inventore doloribus cum culpa, iste autem recusandae cupiditate quas cumque fugiat ipsum debitis tempora nam deserunt?</p>

                        </div>

                    

                    <div className = 'pokemon'>

                        <div className = 'post'>

                            
                        </div>
                        
                    </div>


                    </div>



    </div> 
    )
}