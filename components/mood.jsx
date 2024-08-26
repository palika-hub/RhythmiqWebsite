import { useState } from "react";
import styled from "styled-components";
import Songcard from "./songcard";
export default function Mood(props){
    const [mood,setmood] = useState(0);
    const genres = ["Romantic","Happiness","Gym","Fun & Rock"];
    
    const data = [props.maindata,props.maindata,props.maindata,props.maindata];
    return(
        <>
            <br></br>
            <br></br>
            <br></br>
            <Moodcss>
                <center><h2 id="chotahead" style={{fontFamily:'cursive',color:'white',marginLeft:'30px'}}>Songs Based on Mood</h2></center>
                <br></br>
                <br></br>
                <center>
                <ul className="options">
                    <li style={(mood==0)?{backgroundColor:'white',borderRadius:'5px',color:'black',boxShadow:'0 0px 15px white'}:{}} onClick={()=>{setmood(0)}}>Romantic</li>
                    <li onClick={()=>{setmood(1)}} style={(mood==1)?{backgroundColor:'white',borderRadius:'5px',color:'black',boxShadow:'0 0px 15px white'}:{}}>Happiness</li>
                    <li onClick={()=>{setmood(2)}} style={(mood==2)?{backgroundColor:'white',borderRadius:'5px',color:'black',boxShadow:'0 0px 15px white'}:{}}>Gym</li>
                    <li onClick={()=>{setmood(3)}} style={(mood==3)?{backgroundColor:'white',borderRadius:'5px',color:'black',boxShadow:'0 0px 15px white'}:{}}>Fun & Rock</li>
                </ul>
                </center>
                <br></br>
                <div>
                    {genres.map((pkg,index)=>{
                        return(
                            <div style={(mood==index)?{display:'flex',width:'96%',marginLeft:'2%',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap'}:{display:'none'}}>
                                {data[index].map((song,idx)=>{
                                    return(
                                        <div style={{marginTop:'30px',marginLeft:'20px'}}>
                                        <Songcard proceed={props.proceed} setproceed={props.setproceed} playerlink={props.playerlink} setshowplayer={props.setshowplayer} showplayer={props.showplayer} setplayername={props.setplayername} setplayerlink={props.setplayerlink} name={song["name"]} imgsrc={song["imgsrc"]} audsrc={song["audsrc"]}></Songcard>
                                        </div>
                                    );
                                    
                                })}
                            </div>
                        );
                    })}
                </div>
                



            </Moodcss>
        </>
    );
}
const Moodcss = styled.div`
    .options{
        display:flex;
        flex-direction:row;
        list-style-type:none;
        width:370px;
        align-items:center;
        justify-content:space-between;
    }
    .options>li{
        color:white;
        font-family:cursive;
        cursor:pointer;
        transition:0.5s ease-in-out;
        padding:2px;
    }
    .options>li:hover{
        // border-bottom:0.2rem solid blue;
        background-color:white;
        color:black;
        border-radius:5px;
        box-shadow:0 0px 15px white;
        transition:0.5s ease-in-out;
    }
    @media screen and (max-width:440px){
        .options{
            width:270px;
        }
        .options>li{
            color:white;
            font-family:cursive;
            cursor:pointer;
            transition:0.5s ease-in-out;
            padding:1px;
            font-size:10px;
        }
        #chotahead{
            font-size:20px;
        }
    }

`