import styled from 'styled-components'
export default function Testimonials(){
    const tests = [{"content":"\"Love this music website! It's my go-to for all my favorite tunes.\"","author":'Abhinav'},{"content":"\"The playlist options are endless and always hit the spot.\"","author":'Bobby'},{"content":"\"This music website has introduced me to so many new artists - I'm hooked!.\"","author":'Nagarjuna'}];
    return(
        <>
            <br></br>
            <br></br>
            <Testimonialcss>
                <br></br>
                <center><h2 style={{fontFamily:'cursive',color:'white',marginLeft:'30px'}}>Testimonials</h2></center>
                <br></br>
                <br></br>
                <div id="testscontainer">
                {
                    tests.map((test,idx)=>{
                        return(
                            <div>
                                <div className="card-test">
                                    <br></br>
                                    <br></br>
                                    <center><p className='content'>{tests[idx]["content"]}</p></center>
                                    <br></br>
                                    {/* <br></br> */}
                                    <p className='sign'>{"-"+tests[idx]["author"]}</p>

                                </div>
                            </div>
                        );
                    })
                }
                </div>
                <br></br>
            </Testimonialcss>
        </>
    );
}
const Testimonialcss = styled.div`
    #testscontainer{
        display:flex;
        flex-wrap:wrap;
        align-items:center;
        justify-content:space-evenly;
        width:96%;
        margin-left:2%;
    }
    .card-test{
        width:350px;
        height:200px;
        background-color:white;
        border-radius:10px;
        background-image:url(https://cdn.wallpapersafari.com/31/82/EKDZMd.jpg);
        background-size:cover;
        background-repeat:no-repeat;
        box-shadow: 0 0px 15px white;
        margin:20px;
        
    }
    .content{
        color:white;
        font-family:cursive;
        font-size:15px;
    }
    .sign{
        color:white;
        font-family:cursive;
        font-size:17px;
        margin-left:50%;

    }
    .card-test:hover{
        
        transform:scale(1.1);
        transition: 0.6s;
    }
    
`