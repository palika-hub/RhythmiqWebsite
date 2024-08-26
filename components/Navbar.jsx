import styled from 'styled-components';
export default function Navbar(props){
    return(
        <>
        <Nav>
            <h2 className='logo' style={{color:'white'}}>Rhythmiq</h2>
            <ul className='list'>
                <a href='/'><li style={{color:'white'}}>Home</li></a>
                <a href='/library'><li style={{color:'white'}}>Library</li></a>
                <a href='allsongs'><li style={{color:'white'}}>All Songs</li></a>
                <a href='/#testscontainer'><li style={{color:'white'}}>Testimonials</li></a>
                <li style={{color:'white'}} onClick={()=>{props.setshowplayer(!props.showplayer)}}>Player</li>
            </ul>
            
            <h5  className='connect1'>Connect</h5>
            
        </Nav>
        </>
    );
}

const Nav = styled.nav`
    display:flex;
    width:100vw;
    height:70px;
    align-items:center;
    justify-content:space-between;
    // position:fixed;
    // background-color:grey;
    .logo{
        font-family:cursive;
        font-size:25px;
    }
    .list{
        width:380px;
        display:flex;
        align-items:center;
        justify-content:space-evenly;
        list-style-type:none;
        height:45px;
        // align-self:center;
    }
    .list>li{
        // list-decoration:none;
        text-decoration:none;
        color:black;
        font-family:cursive;
    }
    .connect1{
        width:90px;
        height:30px;
        // padding-top:15px;
        border-radius:20px;
        background-color: black ;
        font-family:cursive;
        font-weight:1px;
        // font-size:5px
        margin-right:45px;
        // margin-top:10px
        cursor:pointer;
        color:white;
        transition:0.5s ease-in-out;

        
    }
    .connect1:hover{
        color:black;
        background-color:white;
        transition:0.5s ease-in-out;
        box-shadow: 0 0px 15px white;
    }
    .list>li{
        cursor:pointer;
    }
    .logo{
        margin-left:30px;
        cursor:pointer;
    }
    .list>a{
        font-family:cursive;
    }
    @media screen and (max-width:750px){
        .logo{
            font-family:cursive;
            font-size:20px;
        }
        .list{
            width:380px;
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            list-style-type:none;
            height:45px;
            // align-self:center;
        }
        .list>li{
            // list-decoration:none;
            text-decoration:none;
            color:black;
            font-family:cursive;
            font-size:12px;
        }
        .list>a{
            // list-decoration:none;
            text-decoration:none;
            color:black;
            font-family:cursive;
            font-size:12px;
        }
        .connect1{
            width:90px;
            height:30px;
            // padding-top:15px;
            border-radius:20px;
            background-color: black ;
            font-family:cursive;
            font-weight:1px;
            font-size:18px;
            margin-right:45px;
            // margin-top:10px
            cursor:pointer;
            color:white;
            transition:0.5s ease-in-out;
    
            
        }
    }
    @media screen and (max-width:540px){
        .logo{
            font-family:cursive;
            font-size:13px;
            margin-left:18px;
        }
        .list{
            width:380px;
            display:flex;
            align-items:center;
            justify-content:space-evenly;
            list-style-type:none;
            height:45px;
            // align-self:center;
        }
        .list>li{
            // list-decoration:none;
            text-decoration:none;
            color:black;
            font-family:cursive;
            font-size:8px;
        }
        .list>a{
            // list-decoration:none;
            text-decoration:none;
            color:black;
            font-family:cursive;
            font-size:8px;
        }
        .connect1{
            width:90px;
            height:24px;
            // padding-top:15px;
            border-radius:20px;
            background-color: black ;
            font-family:cursive;
            font-weight:1px;
            font-size:12px;
            margin-right:45px;
            // margin-top:10px
            cursor:pointer;
            color:white;
            transition:0.5s ease-in-out;
    
            
        }
    }
`;