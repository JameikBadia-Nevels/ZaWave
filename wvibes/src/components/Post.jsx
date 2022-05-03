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

    const com = () => {
        const li= document.createElement('li');//
        const inp = document.querySelector('.new'); //the current input field
        li.textContent = inp.value //setting th eli to the value of the input AT THAT MOMENT
        document.querySelector('ul').appendChild(li);
        inp.value = null
        nav('/:id')
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

            <ul>
                <li>first</li>
            </ul>


            <form className = 'form'>

            Type here ⤵️ <input className = 'new' type = 'text'/> <br/>
            </form>

           <button onClick={com} > Add a Comment </button>
           
           </div>

            <br/>

            <button onClick = {() => {nav(`/${id}/edit`)}}> Edit </button>

            <button  className='delete' onClick={deletedPost}>Remove</button>

        </div>


    )


}