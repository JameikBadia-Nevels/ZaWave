import { getPosts } from "../services/zaWave-api";
import { useEffect, useState } from "react";
import '../App.css'


export default function AllPosts() {
    const [posts, setPosts] = useState([])

    useEffect (() => {
        getPosts()
        .then( res => setPosts (res.data))
    }, [])

    console.log(posts)

    return (

        <div>
           <a href = {'/sign'}> <h3> Bio: If you contribute to this webisite add you name and leave your mark on ZaWave</h3> </a>

             <div className = 'profile'>
                 {posts.map ((post, index) => {
                    
                     return (
                         <a href = {`/${post._id}`}>

                         <p  className="post" key = {index}>

                             <img  className = 'pfp'  src = {post.pic} /> {post.account} <br/>

                             <img src = {post.post}  width = '380' height = '250'/> <br/>

                            <br/>
                         </p>

                        </a>

                    )
                 })}
             </div>

        </div>
    )
}