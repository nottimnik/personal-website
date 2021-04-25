import React from 'react'
import './../../style/Global.css'
import './../../style/Navbar/HomeNavbar.css'

//github icon
import { GrGithub } from 'react-icons/gr';

export default function HomeNavbar() {
    return (
        <>
            <a href="/" className="purple navbar-title" >timnik.</a>

            <a target="_blank" href="https://github.com/nottimnik/">
                <GrGithub 
                    size={30}

                    className="
                        purple 
                        navbar-github-icon" 
                />

            </a>
 
            <div className="navbar-links">

                <a 
                    href="/work"
                    className="
                        light
                        navbar-link-work
                        "
                >
                    Work.
                </a>

                <a 
                    href="/about"
                    className="
                        light
                        navbar-link-about
                        "    
                >
                    About.
                </a>

                <a 
                    href="/contact"
                    className="
                        light
                        navbar-link-contact
                        "
                >
                    Contact.
                </a>

            </div>
 
        </>
    )
}
