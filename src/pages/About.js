import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <div style={{position:"relative", top:"120px"}}>
                <h1 style={{fontFamily: "fantasy", textAlign: "center"}}>About me</h1>
                <p style={{textAlign: "center", fontFamily: "fantasy"}}>My name is Ungureanu Calin Petru, I am 15 yr old Programmer and Artist. <br /> 
                I call myself a professional retard, because I am. All day I program or draw or make music. <br />
                I smoke and get drunk because I am sad sometimes, but I quit smoking but idk I it will last. 
                </p>


                <Link to="/" style={{top:"20px", position:"relative", display: "flex", justifyContent: "center"}}>Go back.</Link>    
            </div>



        </>
    )
}
