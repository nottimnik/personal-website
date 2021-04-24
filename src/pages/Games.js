import React from 'react'
import { Link } from 'react-router-dom'

export default function Games() {
    return (
        <div>
            <h1 style={{fontFamily:"fantasy"}} >⛏️ Stone Miner</h1>
            <p style={{fontFamily:"fantasy"}} >A simple game where your goal is to become rich, by mining stone.</p>   
            <a target="_blank" href="https://github.com/nottimnik/stone-miner">Github</a>
            {' '}
            <a href="/stone-miner/tutorial">Tutorial</a>

            <Link to="/" style={{top:"20px", position:"relative", display: "flex", justifyContent: "center"}}>Go back.</Link>
        </div>
    )
}
