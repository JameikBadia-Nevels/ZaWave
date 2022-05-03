import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { deletePost, getPost } from '../services/zaWave-api'
import '../App.css'

export default function Post() {
    
    const nav = useNavigate()

    const {id} = useParams()

    const [data, setData] = useState({})

    const [likeCounter, setLCounter] = useState(0);

    const [disCounter, setDCounter] = useState(0)

    const increase = () => {
    setLCounter(count => count + 1);
    };
 
    const dislike = () => {
    setDCounter(count => count + 1);
    }

    useEffect(() => {getPost(id)
    .then(res => setData(res.data))
    }, [])

    const deletedPost = () => {
        deletePost(id)
        nav('/')
    }

    return (

        <div>

            {data.account} <img  className = 'pfp'  src = {data.pic}/>
            <br/>
            <br/>
            <img src = {data.post} width = '380' height = '400' />
            <br/>
            {data.cc}
            <br></br>

            <span> {likeCounter} </span>
            <button onClick={increase}> ✅  </button>
            <span >{disCounter} </span>
            <button onClick={dislike}> ❌ </button>

            <div> Comment Section <br/>
            <form className = 'form'>

            Type here ⤵️ <input type = 'text'/> <br/>
            </form>

           <button > Add a Comment </button>
           
           </div>

            <br/>

            <button onClick = {() => {nav(`/${id}/edit`)}}> Edit </button>

            <button  className='delete' onClick={deletedPost}>Remove</button>

        </div>


    )


}