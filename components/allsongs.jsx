import { useState } from "react";
import styled from "styled-components";
import './songs.css';
import Songcard from "./songcard";
export default function Allsongs(props){
    const data = props.data;
    const [total,settotal] = useState(5);
    const [search,setsearch] = useState(false);
    const [final,setfinal] = useState([]);
    const change = ()=>{
        if (document.getElementById('search').value!=""){
            setsearch(true);
            var getval = document.getElementById('search').value;
            const prod = data.filter(prod=>prod["name"].toLowerCase().search(document.getElementById('search').value)!=-1);
            setfinal(prod);
            console.log(prod);
        }else{
            setsearch(false);
        }
        
    }
    return(
        <>
            <br></br>
            <center><h2 style={{fontFamily:'cursive',color:'white'}}>All Songs</h2></center>
            <br></br>
            <div>
            <input id='search' placeholder='Find your groove with the perfect sound.' style={{color:'white',backgroundColor:'#282c34',fontFamily:'cursive',borderColor:'white',borderWidth:'3px',borderRadius:'1.5rem'}} onChange={change}></input>
        
            </div>
            <br></br>
            <Allsongscss>
                <div id="allsongscontainer" style={(search)?{display:'none'}:{}}>
                    {data.map((songdata,index)=>{
                        return(
                            <div style={(index<total)?{display:'block',margin:'20px'}:{display:'none'}}>
                                <Songcard proceed={props.proceed} setproceed={props.setproceed} setplayername={props.setplayername} setplayerlink={props.setplayerlink} setshowplayer={props.setshowplayer} showplayer={props.showplayer} name={songdata["name"]} imgsrc={songdata["imgsrc"]} audsrc={songdata["audsrc"]}></Songcard>
                            </div>
                        );
                    })}
                </div>
                <div id="allsongscontainer" style={(!search)?{display:'none'}:{}}>
                    {final.map((songdata,index)=>{
                        return(
                            <div style={{display:'block',margin:'20px'}}>
                                <Songcard proceed={props.proceed} setproceed={props.setproceed} setplayername={props.setplayername} setplayerlink={props.setplayerlink}  setshowplayer={props.setshowplayer} showplayer={props.showplayer} name={songdata["name"]} imgsrc={songdata["imgsrc"]} audsrc={songdata["audsrc"]}></Songcard>
                            </div>
                        );
                    })}
                </div>
            </Allsongscss>
            <br></br>
            <br></br>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
            <div style={(search)?{display:'none'}:{}}>
            <center><h2  onClick={()=>{settotal(total+5)}} style={{fontFamily:'cursive',color:'black',backgroundColor:'white',width:'150px',fontSize:'25px',borderRadius:'10px',boxShadow:'0 0px 15px white',cursor:'pointer'}}>Load More</h2></center>
            <center><h2 onClick={()=>{settotal(5)}} style={{fontFamily:'cursive',color:'black',backgroundColor:'white',width:'150px',fontSize:'25px',borderRadius:'10px',boxShadow:'0 0px 15px white',cursor:'pointer'}}>Show Less</h2></center>
            </div>
            </div>
            <br></br>
            <br></br>
            {/* <br></br> */}
            
            
        </>
    );
}

const Allsongscss = styled.div`
    #allsongscontainer{
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:space-evenly;
        width:96%;
        margin-left:2%;
    }
`