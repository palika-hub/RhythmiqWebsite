import { useEffect, useState } from "react";
import { useRef } from "react";
import styled from "styled-components";
export default function Player(props){
    const test = [1];
    
    const audio = document.querySelector('audio');
    const audioRef = useRef(null);
    var count = 0;
    useEffect(() => {

        if (audioRef.current) {
        audioRef.current.addEventListener("loadedmetadata", () => {
            audioRef.current.play();
        });
        }
        count+=1;
        
        var myAudio = document.querySelector('audio');
        myAudio.addEventListener("ended", function() {
            // Change the source to the second audio file
            if (count!=1){
                props.onend();
            }
            
        });
    }, [props.playerlink]);
    
    
    
    
    return(
        <>
            
            <Playercss>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="player" style={(props.showplayer)?{transition:'0.5s ease-in-out'}:{transform:'translate(-50%,200%)',transition:'0.5s ease-in-out'}}>
                    <center><h2 style={{fontFamily:'cursive',color:'white',fontSize:'24px'}}>{"Now Playing: "+props.playername}</h2></center>
                    {
                        test.map((produ,idx)=>{
                            return(
                                <>
                                    <audio src={props.playerlink} id="my-audio" type="audio/mp3" className="playerone" controls ref={audioRef}>
                                        
                                    </audio>
                                </>
                            );
                        })
                    }
                    
                    </div>


            </Playercss>
        </>
    );
}

const Playercss = styled.div`
    .player{
        position: fixed; // Add this line
        top: 85%; // Adjust top and left properties to center the player on the screen
        left: 30%;
        transform: translate(-50%, -50%); // Use transform to center the player
        width:60%;
        margin-left:20%;
        height:130px;
        // margin-bottom:0px;
        box-shadow: 0 0px 15px white;
        border-radius:15px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        background-image:url(https://media.tenor.com/nTbpZveJwKEAAAAC/music-beats.gif);
        background-repeat:no-repeat;
        background-size:cover;
        background-position:center;
        // border-radius:20px;


    }
    .playerone{
        width:90%;
        border-radius:20px;
    }
`