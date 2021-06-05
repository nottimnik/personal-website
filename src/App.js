import React from 'react';
import './style/Global.css';
import './style/Home.css';

export default function Home() {
    return (
        <>
            <div className="all">
                <a href="/" className="purple title">timnik.</a>

                <div className="main-home">
                
                <div className="showcase-home">

                    <ul className="gray list-home">
                        <li>Pentester / Developer</li>
                        <li>Member of TerrorCTF</li>
                        <li>Sometimes idiot.</li>
                    </ul>

                    <div>
                            <p className="light parar"><div className="gray">{'>'}</div>{' '}Participated at <div className="purple number">{' '}02{' '}</div> CTFs</p>
                            <p className="light parar"><div className="gray">{'>'}{"  "}</div>Working at {' '}<a href="https://github.com/some1official/" target="_blank" className="purple">SOME1</a>.</p>
                            <p className="light parar"><div className="gray">{'>'}{"  "}</div><a href="https://github.com/nottimnik/" className="purple">Github</a>.</p>

                    <div>

                        </div>
                    </div>
                
                </div>
                </div>
            </div>
        </>
)}
