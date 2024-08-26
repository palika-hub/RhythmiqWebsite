import styled from "styled-components";
import Playlistcard from "./playlistcard";
export default function Playlist(props){
    const data2=[props.partdata,props.partdata,props.partdata,props.partdata];
    return(
        <>
            <Playlistcss>
                <br></br>
                {/* <br></br> */}
                <center><h2 style={{fontFamily:'cursive',color:'white',marginLeft:'30px'}}>Playlists</h2></center>
                <br></br>
                <center>
                    <div className="listcont">
                    {data2.map((datalist,index)=>{
                            return(<>
                                <div>
                                <Playlistcard setplaylistdata={props.setplaylistdata} setcurridx={props.setcurridx} proceed={props.proceed} setproceed={props.setproceed} setshowplayer={props.setshowplayer} showplayer={props.showplayer} setplayername={props.setplayername} setplayerlink={props.setplayerlink} impdata={data2[index]}></Playlistcard>
                                </div>
                            </>);
                        })}
                    
                    </div>
                </center>
            </Playlistcss>
        </>
    );
}

const Playlistcss = styled.div`
    .listcont{
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        justify-content:space-around;
        width:94%;
        
    }
`