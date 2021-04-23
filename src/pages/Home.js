import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1 style={{fontFamily: "fantasy", textAlign: "center"}}>Timnik</h1>
            <h4 style={{fontFamily: "fantasy", textAlign: "center"}}>Website's Pages</h4>

            <Link to="/about" style={{top:"20px", position:"relative", display: "flex", justifyContent: "center"}}>About Me</Link>
            {' '}
            <Link to="/projects" style={{top:"30px", position:"relative", display: "flex", justifyContent: "center"}}>My Projects</Link>
            {' '}
            <Link to="/art" style={{top:"40px", position:"relative", display: "flex", justifyContent: "center"}}>My Art</Link>
            {' '}
            <Link to="/games" style={{top:"50px", position:"relative", display: "flex", justifyContent: "center"}}>My Games</Link>

        </div>
    )
}
