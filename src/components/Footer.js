import styled from "styled-components";
import {BsFacebook, BsInstagram} from 'react-icons/bs'



export default function Footer() {
    return (
        <Wrapper>
            <div className="footer">
            <h3>Bertrand Bovet © 2021</h3>
                <BsFacebook className="icon icon-1" />
                <BsInstagram className="icon icon-2" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    
    
    & .footer{
    display: flex;
    align-items: center;
    justify-content: center;
    padding:5px;
    background: #F6F2D4;
    color: #22577E;
    height: 50px;
    }

    & .icon{
        font-size: 1vw;
        text-align: center;
        margin: 0 1vw;
        
    }

    & h3{
        font-size: 1.6rem;
                margin-top:1vh;

    }

    @media (max-width: 1024px){
    margin-top: 5vh;
    position: relative;
    bottom: 0;
    justify-content: center;
    align-items: center;

    & h3{
        margin-top:1vh;
        font-size: 5vw;
    }
    & .icon{
        font-size: 4vw;
        text-align: center;
        margin: 0 1vw;
    }
    }
`;