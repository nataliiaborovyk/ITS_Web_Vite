import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import Profiles from './Profiles'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import SingleProfile from './SingleProfile'
import Myprofile from './Myprofile'

const ProvaRouter = () => {

    // const [link, setLink] = useState("Home")

    // const  renderCondizionale = () => {
    //     if (link === "Home"){
    //         return <Home/>
    //     }
    //      if (link === "About"){
    //         return <About/>
    //     }
    //      if (link === "Profiles"){
    //         return <Profiles/>
    //     }
    // }
    
  return (
    <div>

        <BrowserRouter>
        <nav className="navbar">
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/profiles"> Profiles</Link>
        </nav>
        <hr></hr>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>

            <Route path="/profiles/" element={<Profiles/>}>
                <Route path=":id" element={<SingleProfile/>}></Route>  
                <Route path="me" element={<Myprofile/>}></Route>
            </Route>

             <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
        </BrowserRouter>
        {/* <nav className="navbar  ">
            <div className="container justify-content-between">
            <button  
                className='btn btn-link nav-link' 
                onClick = {()=> setLink("Home")}
                >Home</button>
            <button 
                className='btn btn-link nav-link' 
                onClick = {()=> setLink("About")}
                >About</button>
            <button 
                className='btn btn-link nav-link' 
                onClick = {()=> setLink("Profiles")}
                >Profiles</button>
            </div>
        </nav>
        <div>
            <br></br>
            <hr></hr>

            <b>{renderCondizionale()}</b> 
        </div> */}
    </div>
    
  )
}

export default ProvaRouter