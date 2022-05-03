import {useNavigate} from 'react-router-dom'
import { uploadPost } from '../services/zaWave-api'
import '../App.css'

export default function Upload(){

    const nav = useNavigate()

    const createPost = () => {
        let create = {account: document.querySelector('.new').value}
        uploadPost(create)
        nav('/')
    }

    return (

        <div>
            <h2> Upload new post </h2>

            <form className = 'form'>

                Account: <input className = 'new' type = 'text' name /> <br/>
                Profile Pic: <input  className= 'new' type = 'text'/> <br/>
                Post: <input className = 'new' type = 'text'/> <br/>
                Caption: <input className='new' type = 'text'/> <br/>

                <button onClick={createPost}>Upload</button>

            </form>
        </div>
    )

}