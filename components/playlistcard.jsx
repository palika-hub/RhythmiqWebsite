import { useState } from "react";
import styled from "styled-components";
export default function Playlistcard(props){

    const data1 = props.impdata;
    // const data1 = [{"name":"varisu"},{"name":"varisu"},{"name":"varisu"},{"name":"varisu"}]
    const [show,setshow] = useState(false);
    
    // const [currindex,setcurrindex] = useState(0);
    function playlistchange(index,name,source){
        const audio = document.querySelector('audio');
        // const link = props.audsrc;
        // console.log(source);
        if (!props.showplayer){
            props.setshowplayer(true);
        }
        props.setproceed(true);
        // console.log(props.proceed);
            
            
        
        props.setplayername(name);
        props.setplayerlink(source);
    }
    return(
        <>
            <Playlistcardcss>
                <div className="cardp">
                    <br></br>
                    <center><h2 className="name">My Favourites</h2></center>
                    <br></br>
                    {/* <br></br> */}
                    <img className="playlogo" src="https://w0.peakpx.com/wallpaper/176/906/HD-wallpaper-music-colorful-characters-grunge-music.jpg"></img>
                    <br></br>
                    {/* <br></br> */}
                    <div className="limit" style={(show)?{visibility:"hidden"}:{}}>
                        {data1.map((datalist,index)=>{
                            return(<>
                                <div style={{width:"80%",backgroundColor:'black',boxShadow:'0 0px 15px white',height:'60px',borderRadius:'10px',marginTop:'10px',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
                                    <h2 style={{color:'white',fontFamily:'cursive',fontSize:'18px'}}>{index+1}</h2>
                                    <h2 style={{color:'white',fontFamily:'cursive',fontSize:'18px'}}>{datalist["name"]}</h2>
                                    <img onClick={()=>{playlistchange(index,datalist["name"],datalist["audsrc"]);props.setcurridx(index);props.setplaylistdata(data1)}} id='play-pause1' src='https://www.freeiconspng.com/thumbs/play-button-icon-png/play-button-icon-png-5.png'></img>
                                </div>
                            </>);
                        })}
                        <br></br>
                    </div>
                    <br></br>
                    <img className={(show)?"showlist":"unshowlist"} onClick={()=>{setshow(!show)}} src="https://cdn-icons-png.flaticon.com/512/7604/7604589.png"></img>
                </div>
                <br></br>
            </Playlistcardcss>
        </>
    );
}

const Playlistcardcss = styled.div`
    .cardp{
        // background-color:white;
        background-image:url(https://e1.pxfuel.com/desktop-wallpaper/747/21/desktop-wallpaper-7-black-and-purple-backgrounds-purple-dark-theme.jpg);
        background-size:cover;
        // background-attachment:fixed;
        background-position:center;
        background-repeat:no-repeat;
        width:300px;
        height:500px;
        margin-left:2%;
        border-radius:10px;
        // display:flex;
        // flex-direction:column;
        // flex-wrap:wrap;
        box-shadow: 0 0px 15px white;
        align-items:center;
        justify-content:space-between;

    }
    .playlogo{
        width:200px;
        height:150px;
        // border-radius:30px;
        border-radius:10px;

    }
    .name{
        font-family:cursive;
        color:white;
        font-size:25px;
        // margin-left:30px;
    }
    .showlist{
        border-radius:50%;
        width:50px;
        box-shadow: 0 0px 15px white;
        transform:rotate(180deg);
        cursor:pointer;
        transition:0.5s ease-in-out;
        margin-top:-100px;
    }
    .unshowlist{
        border-radius:50%;
        width:50px;
        box-shadow: 0 0px 15px white;
        // transform:rotate(180deg);
        cursor:pointer;
        transition:0.1s ease-in-out;
    }
    .limit{
        height:150px;
        overflow-y:scroll;
        margin-top:10px;
    }
    .limit::-webkit-scrollbar {
        display: none;
      }
      
      /* Hide scrollbar for IE, Edge and Firefox */
      .limit {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }
      #play-pause1{
        width:35px;
        cursor:pointer
        
    }
    #play-pause1:hover{
        scale:1.1;
        transition:0.5s ease-in-out;
        
    }
      
`