import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./components/Home"
import Create from './components/Create'
import Post from './components/Post'
import Edit from './components/Edit'
import Trendz from './components/Trendy'
import Profile from './components/Profile'
import Sign from './components/Signing'



function App() {
  const [posts, setPosts] = useState([])

    useEffect (() => {
        axios.get('http://localhost:3003/wavez')
        .then( res => setPosts (res.data))
    }, [])

    console.log(posts)

  
  return (
    <div>
      <h1>🌊 ZaWave 🌊 </h1>
    <div className="App">
        <Router>

          <nav>
              <Link to = '/' >  🛖 Home 🛖 </Link> 
              
              <Link to = '/trendz'> 🔌 Trendz 🔌 </Link> 
              
              <Link to = '/create'> 🌐 Upload 🌐 </Link>

              <Link to = '/profile'> 🅿️ Profile 🅿️ </Link>
            </nav>
            
            <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/trendz" element = {<Trendz/>}/>
              <Route path = "/:id" element = {<Post/>}/>
              <Route path = "/profile" element = {<Profile/>}/>
              <Route path = "/create" element = {<Create/>}/>
              <Route path = "/:id/edit" element = {<Edit/>}/>
              <Route path = '/sign' element = {<Sign/>}/>
            </Routes>
        </Router>
    </div>
  </div>
  );
}

export default App;
