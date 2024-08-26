import { useState } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Songcard(props){
    const [playing,setplaying] = useState(false);
    function pauseplay(){
        const audio = document.querySelector('audio');
        const link = props.audsrc;
        if (!props.showplayer){
            props.setshowplayer(true);
        }
        if (props.proceed){
            props.setproceed(false);
            console.log(false);
        }
        props.setplayername(props.name);
        props.setplayerlink(props.audsrc);
        // console.log(props.audsrc);
    }
    return(
        <>
            <Song>
                <div className='songcard'>
                    <br></br>
                    {/* <br></br> */}
                    <center><img className='songimg' src={props.imgsrc}></img></center>
                    {/* <br></br> */}
                    <div>
                        <div id='head'></div>
                        <h2 id='text' style={{fontFamily:'cursive'}}>{props.name}</h2>
                    </div>
                    <br></br>
                    {/* <FontAwesomeIcon icon="fa-solid fa-play-pause" beat style={{color: "#1e3050",}} /> */}
                    <img onClick={()=>{pauseplay()}} id='play-pause' src='https://www.freeiconspng.com/thumbs/play-button-icon-png/play-button-icon-png-5.png'></img>
                    {/* <br></br> */}
                    {/* <br></br> */}
                    {/* <p id='marq'>{(playing)?"Now Playing":"Start Playing"}</p> */}
                    {/* <div style={{visibility:'hidden'}}>
                    <audio controls>
                        <source src="https://drive.google.com/uc?id=1do5OipxDyTOiGFhEnTUH1CC5HB7b6ZmV" type="audio/mp3"></source>
                        Your browser does not support the audio element.
                    </audio>
                    </div> */}
                </div>
            </Song>
        </>
    );
}

const Song = styled.div`
    .songcard{
        width:230px;
        height:400px;
        background-image:url(https://cutewallpaper.org/22/anime-boy-headphones-wallpapers/14-best-anime-guy-and-headphones-wallpaper-model-anime-wallpapers.jpg);
        background-size:cover;
        background-repeat:no-repeat;
        border-radius:15px;
        transition: 1s ease-in-out;

    }
    .songcard:hover{
        // width:300px;
        scale:1.1;
        transition: 1s ease-in-out;
        box-shadow: 0 0px 15px white;
    }
    .songimg{
        width:170px;
        margin-left:7px;
        height:180px;
        border-radius:10px;

    }
    #head{
        background-color:grey;
        opacity:0.2;
        width:100%;
        height:40px;
        margin-top:10px;
    }
    #text{
        margin-top:-40px;
        z-index:100;
        color:   #f5f404   ;
    }
    #play-pause{
        width:50px;
        cursor:pointer
        
    }
    #play-pause:hover{
        scale:1.1;
        transition:0.5s ease-in-out;
        
    }
    #marq{
        color: #48f00a ;
        font-family:cursive;
        margin-top:5px;
    }
    
`