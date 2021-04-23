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

            <h2 style={{position:"relative" ,top: "100px",fontFamily: "fantasy", textAlign: "center"}}>Random thought</h2>
            <p style={{position:"relative" ,top: "130px",fontFamily: "fantasy", textAlign: "center"}}>
                Its weird to have a decent number of friends, thinking that noone is a true friend <br/>
                Wanting to have no friends, but still knowing that if I will I would <br/>
                Probably just kill myself because of the loneliness. I still want to have a person that truly loves me<br />
                I don't feel this from anyone, not even me, I hate myself. I am trying to get this love from god.<br/>
                But my relationship with me and god is weak now, we don't talk as much as we used to. <br/>
                I can't love a person, I don't have time, I have so many things to do, not a lot of time and a after life that waits for me.<br/>
                And I also thing that I will not be able to love anyone. 
            </p>

            <h2 style={{position:"relative" ,top: "200px",fontFamily: "fantasy", textAlign: "center"}}>Contact Me</h2>
            <p style={{fontSize: "13px"  ,position:"relative" ,top: "202px",fontFamily: "fantasy", textAlign: "center"}}>
                calin.petru.ungureanu@gmail.com
            </p>

            <h5 style={{position:"relative" ,top: "220px" ,fontFamily: "fantasy", textAlign: "center"}}>I might create a blog tho, <br /> kinda wanna share some thoughts</h5>

            
        </div>
    )
}
