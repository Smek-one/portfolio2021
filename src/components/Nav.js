import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";



export default function Nav() {
        const location = useLocation();

    return (
        
        <Navigation>
            <Link to="/"><MenuEl isCurrentPage={location.pathname === "/"}>Home</MenuEl></Link>
            <Link to="/projects"><MenuEl isCurrentPage={location.pathname === "/projects"}>Projects</MenuEl></Link>
            <Link to="/skills"><MenuEl isCurrentPage={location.pathname === "/skills"}>Skills</MenuEl></Link>
            <Link to="/contact"><MenuEl isCurrentPage={location.pathname === "/contact"}>Contact</MenuEl></Link>
        </Navigation>
        
      
    )
};

const Navigation = styled.nav`
    text-align:center;
    margin-bottom: 5vh;
    padding-top: 1vh;
    max-width: 100%;
    

    }
    & a{
        text-decoration: none;
        color: #F6F2D4;
        margin: 10px;
        font-size: 1.5rem;
    }
    @media (max-width: 768px){

     & a{
         font-size: 1.2rem;
     }
    }   

`;

const MenuEl = styled.a`
    {
        border-bottom: 1px solid ${props=>props.isCurrentPage ? "" : "transparent"};
        padding-bottom: 1px;
    }
    &:hover{
        color: #95D1CC;
    }
`;