import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <div style={{position:"relative", top:"120px"}}>
                <h1 style={{fontFamily: "fantasy", textAlign: "center"}}>About me</h1>
                <p style={{textAlign: "center", fontFamily: "fantasy"}}>My name is Ungureanu Calin Petru, I am 15 yr old Programmer and Artist. <br /> 
                I call myself a professional retard, because I am. All day I program or draw or make music. <br />
                I call myself a professional, because I want to think that I am doing some import work, but I am not doing. <br />
                When I don't make music/program I usually go outside with my bike or <br />
                Smoke and get drunk because I am sad sometimes (for no fking reason), but I quit smoking but idk if it will last. 
                </p>


                <Link to="/" style={{top:"20px", position:"relative", display: "flex", justifyContent: "center"}}>Go back.</Link>    
            </div>



        </>
    )
}
