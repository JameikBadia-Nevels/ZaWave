import { getPosts } from "../services/zaWave-api";
import { useEffect, useState } from "react";
import '../App.css'


export default function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect (() => {
        getPosts()
        .then( res => setPosts (res.data))
    }, [])

    return (

        <div>
            

             <div className = "home" >
                 {posts.map ((post, index) => {
                     return (
                         <a href = {`/${post._id}`}>

                         <p  className="post" key = {index}>
                             <img  className = 'pfp'  src = {post.pic} /> {post.account} <br/>
                             <img src = {post.post}  width = '380' height = '500'/> <br/>
                             Caption:{post.cc} <br/>
                         </p>

                        </a>

                     )
                 })}
             </div>

        </div>
    )
}