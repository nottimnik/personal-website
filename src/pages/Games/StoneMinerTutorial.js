import React from 'react'
import { Link } from 'react-router-dom'

export default function StoneMinerTutorial() {
    return (
        <div>
            <h1 style={{fontFamily:"fantasy"}} >⛏️ Stone Miner - How to play on the browser</h1>
            <ol style={{fontFamily:"fantasy", fontSize: "16px"}}>
                <li>Go on the <a target="_blank" href="https://github.com/nottimnik/stone-miner/blob/main/main.cpp">Github</a> page and copy the code from the file main.cpp</li>
                <li>Go on <a target="_blank" href="https://www.onlinegdb.com/online_c++_compiler">this</a> C++ Compiler Online</li>
                <li>Delete all the pre-written code, by using CTRL+A and the delete button</li>
                <li>Paste the code from github</li>
                <li>Press Run</li>
                <li>Congraz! You are playing Stone Miner Online!</li>
            </ol>

            <Link to="/" style={{top:"20px", position:"relative", display: "flex", justifyContent: "center"}}>Go back.</Link>
        </div>
    )
}
