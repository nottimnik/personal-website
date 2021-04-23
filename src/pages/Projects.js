import React from 'react'
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <>
            <h1 style={{fontFamily:"fantasy"}} >TimnikOS</h1>
            <p style={{fontFamily:"fantasy"}} >A UNIX operating system created by me with some preinstalled apps created by me.</p>   
            <a target="_blank" href="https://github.com/nottimnik/timnikos">Github</a>
            {' '}
            <h1 style={{fontFamily:"fantasy"}} >SOME1</h1>
            <p style={{fontFamily: "fantasy"}}>My startup that creates tools for developers.</p>
            <a target="_blank" href="https://github.com/some1official/">Github</a>
            {' '}
            <a target="_blank" href="https://some1.xyz/">Website</a>

            <Link to="/" style={{top:"20px", position:"relative", display: "flex", justifyContent: "center"}}>Go back.</Link>

        </>
    )
}
