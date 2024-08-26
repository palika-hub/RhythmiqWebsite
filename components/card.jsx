import styled from 'styled-components'
export default function Card(){
    return(
        <>
            <Cardcss>
                
                <div id='contcard'>
                <div id='card'>
                    <br></br>
                    <p>Get Best Prices</p>
                    <span>We offer the best prices and plans.</span>
                </div>
                <div id='card'>
                    <br></br>
                    <p>Get Best Songs</p>
                    <span>We offer the best Music and Songs.</span>
                </div>
                <div id='card'>
                    <br></br>
                    <p>Based on Mood</p>
                    <span>Songs are listed based on your mood.</span>
                </div>
                <div id='card'>
                    <br></br>
                    <p>Best Visual</p>
                    <span>Best and pleasant UI for music and songs.</span>
                </div>
                </div>

            </Cardcss>
        </>
    );
}

const Cardcss = styled.div`
    align-items:center;
    #contcard{
        width:96%;
        display:flex;
        align-items:center;
        justify-content:space-around;
        flex-wrap:wrap;
    }
    #card{
        width:350px;
        height:200px;
        // background-color:#5262be;
        background-image:url(https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
        // background-attachment:fixed;
        background-size:cover;
        background-repeat:no-repeat;
        border-radius:10px;
        cursor:pointer;
        margin-top:30px;
        box-shadow: 0 0px 15px white;
    }
    #card:hover{
        transform:scale(1.05) perspective(0px);
        transition:0.5s;
        transform:translateX(5px)translateY(-5px);
        
        box-shadow: 4px 4px 4px rgba(60, 60, 93, 0.33);
        box-shadow: 0 0px 15px white;
    }
    #card>p{
        font-family:cursive;
        font-size:25px;
        color:white;
    }
    #card>span{
        font-family:cursive;
        color:white;
        font-size:22px;
    }
    

`