import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import {FaSpotify} from "react-icons/fa"
import './index.css'
import { Outlet,Link } from "react-router-dom";
import { useState } from "react";
import {ReactAudioPlayer} from 'react-audio-player';
import { useRef } from "react";


function LayoutMain(){

    // const [State,setState] = useState(<img src = "/images/play.png"/>)
    // const handleButton = () => {
    //    if(State.props.src == "/images/play.png"){
    //     setState(<img src = "/images/pause.png"/>)
    //    }else{
    //     setState(<img src = "/images/play.png"/>)
    //    }
    // }
const [isPlaying,setIsPlaying] = useState(false);
const audioURL = 'audio/nhac2.mp3';
const toggleAudio = () => {
    setIsPlaying(!isPlaying);
}

const audioRef = useRef(null);

const playAudio = () => {
    audioRef.current.play();
};

const pauseAudio = () => {
    audioRef.current.pause();
};

    
    return(
        <>
        <header>
           <div className="inner-menu">
                <div className="inner-header-top">
                    <ul>
                        <li>
                            <Link to = "/"> Home </Link>
                        </li>
                        <li>
                            <Link to = "/Stores"> Store </Link>
                        </li>
                        <li>
                            <Link to = "/About" > About </Link>
                        </li>
                    </ul>
                </div>
            </div>
                <div className="inner-header-main">
                    <div className="inner-title-header">
                        <h1>The Generics</h1>
                    </div>
                    <div className="inner-search">
                        Muon Roi Ma Sao Con
                    </div>
                    <div className="inner-button" onClick={toggleAudio}>
                        <div>
                            <audio ref = {audioRef} src = {audioURL}/>
                        </div>
                        <div className="inner-image" >
                            <img src={isPlaying ?  'images/pause.png' : null}
                                onClick={() => pauseAudio()}
                            />
                                <img src={isPlaying ?   null : 'images/play.png' }
                                onClick={() => playAudio()}
                            />
                        </div>
                    </div>
                </div>
        </header>
        <main className="inner-main">
            <Outlet/>
        </main>
        <footer>
            <div className="inner-footer">
                <div className="inner-title">
                    <h3 className="inner-title">The Generics</h3>
                </div>
                <div className="inner-logo">
                    <ul>
                        <li>
                            <a href="https://open.spotify.com/?">
                                <FaSpotify/>
                            </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                          <i className ="fa-brands fa-instagram">
                            <FaInstagramSquare/>
                          </i>
                          </a>
                        </li>
                        <li>
                         <a href="https://www.facebook.com/">
                            <FaFacebookSquare/>
                         </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}

export default LayoutMain;