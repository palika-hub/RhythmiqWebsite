import styled from "styled-components";
export default function Button(){
    return(
        <>
            <br></br>
            <br></br>
            <br></br>
            <Buttoncss>
            <div class="floatingButtonWrap" style={{marginRight:'-15px'}}>
            <div class="floatingButtonInner">
                <a href="#" class="floatingButton">
                    <i class="fa fa-plus icon-default"></i>
                </a>
            </div>
        </div>
        </Buttoncss>
        </>
    );
}
const Buttoncss = styled.div`
.floatingButtonWrap {
    display: block;
    position: relative;
    bottom: 45px;
    right: 45px;
    z-index: 999999999;
  }
  
  .floatingButtonInner {
    position: relative;
  }
  
  .floatingButton {
    display: block;
    width: 60px;
    height: 60px;
    text-align: center;
    background: -webkit-linear-gradient(45deg, #8769a9, #507cb3);
    background: -o-linear-gradient(45deg, #8769a9, #507cb3);
    background: linear-gradient(45deg, #8769a9, #507cb3);
    color: #fff;
    line-height: 50px;
    position: absolute;
    border-radius: 50% 50%;
    bottom: 0px;
    right: 0px;
    border: 5px solid #b2bedc;
    /* opacity: 0.3; */
    opacity: 1;
    transition: all 0.4s;
  }
  
  .floatingButton .fa {
    font-size: 15px !important;
  }
  
  .floatingButton.open,
  .floatingButton:hover,
  .floatingButton:focus,
  .floatingButton:active {
    opacity: 1;
    color: #fff;
  }
  
  
  .floatingButton .fa {
    transform: rotate(0deg);
    transition: all 0.4s;
  }
  
  .floatingButton.open .fa {
    transform: rotate(270deg);
  }
  
  
  
  

`