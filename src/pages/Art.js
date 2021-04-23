import React from 'react'
import { Link } from 'react-router-dom'

//images
import Drawing1 from './../art/1.PNG'

export default function Art() {
    return (
        <>
            <h1 style={{fontFamily:"fantasy"}} >My Art</h1>
            
            <img style={{position: "relative", top:"40px" ,display:"flex", justifyContent: "center"}} src={Drawing1} height="250" />
            <p style={{position: "relative", top:"30px"}}>A war in a forest, April 23 2021</p>
        
            <Link to="/" style={{top:"20px", position:"relative", display: "flex", justifyContent: "center"}}>Go back.</Link>
        </>
    )
}
