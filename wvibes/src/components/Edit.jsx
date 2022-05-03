import { useNavigate, useParams } from "react-router-dom"
import { editPost, getPost} from "../services/zaWave-api"
import {useEffect, useState} from 'react'


export default function ChangePost () {

    const nav = useNavigate()
    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        getPost(id)
        .then(res => setData(res.data))
    }, [])

    const alter = e => {
        const updatedPost = {account: e.target.account.value, pic: e.target.pic.value, post: e.target.post.value, cc: e.target.cc.value}
        editPost(id, updatedPost)
        nav(`/${id}`)
    }

    return (

        <div>
            <h1>Edit Post</h1>

            <form  className = 'form' onSubmit={alter}>

                Account: <input type = "text" name = "account" defaultValue={data.account}/>
                Profile Pic: <input type = "text" name = "pic" defaultValue={data.pic}/>
                Post: <input type = "text" name = "post" defaultValue={data.post}/>
                Caption: <input type = "text" name = "cc" defaultValue={data.cc}/>
                    <br/>
                <input type="submit" value = "Save Changes"/>

            </form>
        </div>

    )


}
