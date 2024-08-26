import styled from 'styled-components';
export default function Frontimage(){
    return(
        <>
            <Front>
                <div>
                <div id='container'>
                <img id='photo' src='https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg'></img>
                <h2 id='imgquote'>LISTEN TO EXPLORE</h2>
                <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                    <input style={{fontFamily:'cursive'}} className="search_input" type="text" name="" placeholder="Describe your mood..."></input>
                    <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                    </div>
                </div>
                
                </div>
                {/* <p>Hello</p> */}
                <br></br>
                {/* <br></br> */}
                {/* <br></br> */}
                <p id='para'>Music is a magical and transformative art that speaks to the soul, evoking deep emotions and connecting us to something greater. It inspires us, moves us, and brings us together in shared experience. From ancient chants to modern pop hits, music enriches our lives with beauty and wonder.</p>
                
                
                
                </div>
                
                </div>
                {/* <br></br> */}
                <p style={{color:'white'}} id='quote'>"One good thing about music, when it hits you, you feel no pain."</p>
            </Front>
        </>
    );

}
const Front = styled.div`
    #photo{
        width:96%;
        height:450px;
        margin-top:20px;
        border-radius:10px
    }
    #quote{
        font-family:cursive;
        margin-top:15px;
    }
    #imgquote{
        font-family:cursive;
        margin-top:-350px;
        font-size:40px;
        color:white;
    }
    #container{
        height:470px;
    }
    .searchbar{
        margin-top: 2%;
        height: 60px;
        background-color: #434646;
        border-radius: 30px;
        padding: 10px;
        }
    
        .search_input{
        color: white;
        border: 0;
        outline: 0;
        background: none;
        width: 0;
        line-height: 40px;
        transition: width 0.4s linear;
        }
        .search_input{
            padding: 0 10px;
            width: 450px;
            transition: width 0.4s linear;
        }
        .search_icon{
            background: white;
            color: #e74c3c;
        }
    
       
    
        .search_icon{
        background: white;
        color: #e74c3c;
        }
    
        .search_icon{
        height: 40px;
        width: 40px;
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color:black;
        text-decoration:none;
        }
        #para{
            width:80%;
            margin-left:10%;
            color:white;
            font-family:cursive;
        }

        @media screen and (max-width:750px){


            .searchbar{
                margin-top: 2%;
                height: 60px;
                background-color: #434646;
                border-radius: 30px;
                padding: 10px;
                }
            
                .search_input{
                color: white;
                border: 0;
                outline: 0;
                background: none;
                width: 0;
                line-height: 40px;
                transition: width 0.4s linear;
                }
                .search_input{
                    padding: 0 10px;
                    width: 220px;
                    transition: width 0.4s linear;
                }
                .search_icon{
                    background: white;
                    color: #e74c3c;
                }
            
               
            
                .search_icon{
                background: white;
                color: #e74c3c;
                }
            
                .search_icon{
                height: 40px;
                width: 40px;
                float: right;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                color:black;
                text-decoration:none;
                }

        }
        @media screen and (max-width:540px){
            #para{
                font-size:12px;
            }
        }
`