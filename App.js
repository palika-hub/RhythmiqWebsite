import logo from './logo.svg';
import './App.css';
import Frontimage from './components/frontimage';
import Navbar from './components/Navbar';
import Card from './components/card';
import Songcard from './components/songcard';
import Mood from './components/mood';
import Testimonials from './components/testimonials';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/footer';
import Button from './components/button';
import Allsongs from './components/allsongs';
import Playlist from './components/playlist';
import Player from './components/player';
import { useState } from 'react';

function App() {
  const maindata = [{"name":"Varisu","imgsrc":"https://i.scdn.co/image/ab67616d0000b2739d085e3c00e22bda745185ed","audsrc":"https://res.cloudinary.com/dntbu3vhr/video/upload/v1680279203/songs/spotifydown.com_-_6TK7jseRCrogw9IzQYkw2h_yw7fkk.mp3"},
  {"name":"Believer","imgsrc":"https://mir-s3-cdn-cf.behance.net/projects/404/212a9698592321.Y3JvcCwzNTA4LDI3NDMsMCwxMzQ1.png","audsrc":"https://res.cloudinary.com/dntbu3vhr/video/upload/v1680279343/songs/Imagine_Dragons_-_Believer_lnhqit.mp3"},
  {"name":"Taki Taki","imgsrc":"https://townsquare.media/site/812/files/2018/09/dj-snake-taki-taki-cover.jpg?w=750&q=75","audsrc":"https://res.cloudinary.com/dntbu3vhr/video/upload/v1680279713/songs/spotifydown.com_-_4w8niZpiMy6qz1mntFA5uM_rbsawg.mp3"},
  {"name":"Maate","imgsrc":"https://wallpapercave.com/wp/wp9760640.jpg","audsrc":"https://res.cloudinary.com/dntbu3vhr/video/upload/v1680279531/songs/spotifydown.com_-_15tihU7QrnhaBvE7hXGDwa_angrez.mp3"}]
  const [showplayer,setshowplayer] = useState(false);
  const [playername,setplayername] = useState("");
  const [playerlink,setplayerlink] = useState("");
  const [proceed,setproceed] = useState(false);

  const [playlistdata,setplaylistdata] = useState([]);
  const [curridx,setcurridx] = useState(-1);
  
  function onend(){
      // console.log(proceed);
      // console.log(playlistdata);
      //   console.log(curridx);
      // if (proceed){
        
      //   if (curridx<playlistdata.length-1){
      //     // console.log(proceed);
          
      //     setcurridx(curridx+1);
      //     setshowplayer(true);
      //     setplayername(playlistdata[curridx]["name"]);
      //     setplayerlink(playlistdata[curridx]["audsrc"]);
      //   }else{
      //     setproceed(false);
      //   }
      // }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setshowplayer={setshowplayer} showplayer={showplayer}></Navbar>
        <Frontimage></Frontimage>
        <Routes>
          <Route path="/" element={
            <>
            <center><Card></Card></center>
            {/* <center><Songcard></Songcard></center>
            <br></br> */}
            <Mood proceed={proceed} setproceed={setproceed} maindata = {maindata} setshowplayer={setshowplayer} showplayer={showplayer} setplayername={setplayername} setplayerlink={setplayerlink} playerlink={playerlink}></Mood>
            <Testimonials></Testimonials>
            <Button></Button>
            
            </>
          }></Route>
          <Route path='/library' element={
            <>
              <Playlist setplaylistdata={setplaylistdata} setcurridx={setcurridx} proceed={proceed} setproceed={setproceed} setshowplayer={setshowplayer} showplayer={showplayer} setplayername={setplayername} setplayerlink={setplayerlink} partdata={maindata}></Playlist>
            </>
          }>
          </Route>
          <Route path='/allsongs' element={<>
            <Allsongs proceed={proceed} setproceed={setproceed} data={maindata} setshowplayer={setshowplayer} showplayer={showplayer} setplayername={setplayername} setplayerlink={setplayerlink}></Allsongs>
          </>}></Route>
          
        </Routes>
        <Player proceed={proceed} onend={onend} playername={playername} playerlink = {playerlink} showplayer={showplayer}></Player>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
