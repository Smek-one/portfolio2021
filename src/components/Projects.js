import styled from "styled-components";
import lbm from "./images/lbm.png";
import tkd from "./images/tkd.png";
import multiplicationtable from "./images/multiplicationtable.png";
import dicegame from "./images/dicegame.png";
import ProfilPic3 from "./images/ProfilPic3.png";

import { Card, Button } from "react-bootstrap";


export default function Projects() {
    return (
        <Wrapper>

            {/*LBM*/}
            
            <Card style={{ width: '20rem' }} className="cards">
  <Card.Img variant="top" src={lbm} className="CardImg" />
  <Card.Body>
    <Card.Title style={{color: "#22577E", textDecoration:"underline"}}>Site E-commerce</Card.Title>
    <Card.Text>
        Site web e-commerce de vente en ligne d' accessoires de mode féminin. Crée avec Wordpress et quelques plugins comme
        Woocommerce, Elementor...                
    </Card.Text>
    <Button style={{color: "#22577E", backgroundColor: "#95D1CC", border: "none"}} href="https://www.labellemarginale.fr" target="_blank">La Belle Marginale</Button>
                </Card.Body>
            </Card>

            {/*DiceGame*/}


             <Card style={{ width: '20rem' }} className="cards">
  <Card.Img variant="top" src={dicegame} className="CardImg"/>
  <Card.Body>
    <Card.Title style={{color: "#22577E", textDecoration:"underline"}}>DiceGame</Card.Title>
    <Card.Text>
      Une évaluation durant ma formation chez Studi. Réaliser un petit jeu de dé d'un autre siècle. Simple et responsive, juste avec HTML, CSS et JS. 
    </Card.Text>
    <Button style={{color: "#22577E", backgroundColor: "#95D1CC", border: "none"}} href="https://smek-one.github.io/RollDice/" target="_blank">Dice Game</Button>
  </Card.Body>
            </Card>

            {/*multiplicationtable*/}
            
             <Card style={{ width: '20rem' }} className="cards">
  <Card.Img variant="top" src={multiplicationtable} className="CardImg" />
  <Card.Body>
    <Card.Title style={{color: "#22577E", textDecoration:"underline"}}>Table de multiplication</Card.Title>
    <Card.Text>
      Un petit site pour m'entraîner avec Javascript et le DOM. Ma fille apprenant ses tables de multiplications, l'idée m'ai venu de créer ce site.
    </Card.Text>
    <Button style={{color: "#22577E", backgroundColor: "#95D1CC", border: "none"}} href="https://smek-one.github.io/multiplicationTable/" target="_blank">Table de multiplication</Button>
  </Card.Body>
            </Card>

            {/*tkd*/}

             <Card style={{ width: '20rem' }} className="cards"> 
  <Card.Img variant="top" src={tkd} className="CardImg"  />
  <Card.Body>
    <Card.Title style={{color: "#22577E", textDecoration:"underline"}}>Association de taekwondo</Card.Title>
    <Card.Text>
      Ma toute première évaluation durant ma formation Studi. Un site web pour une association (réelle ou fictive), responsive et juste en HTMLet CSS. Avec Bootstrap bien sur.
    </Card.Text>
    <Button style={{color: "#22577E", backgroundColor: "#95D1CC", border: "none"}} href="https://smek-one.github.io/eval1/" target="_blank">Taekwondo</Button>
  </Card.Body>
            </Card>
            
            <img src={ProfilPic3} alt="profilpic" className="pic"/>
            </Wrapper>
    )
};

const Wrapper = styled.div`
    background: #F6F2D4;
    width: 90vw;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 45vw 1fr;
    gap: 2vh 1vw;
    margin: auto;
    align-self: center;
    
    & .cards{
        display: block;
        margin: 5vh auto;
    }

    & .CardImg{
        width: 80%;
        margin: auto;
        border: 1px solid #000;
        border-radius: 5px;
    }

    & .pic{
        width: 10vw;
        position: absolute;
        top: 60px;
        left: 45%;
        margin-top: 30vh;
    }

    & .cards{
        border: 1px solid #22577E;
        padding: 5px 5px;
    }

    @media (max-width: 1024px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto;
        font-size: 1.2rem;
        text-align: center;

    & .pic{
        width: 30vw;
        position: relative;
        top: -15px;
        left: 35%;
        margin-top:0;
        }
    }
      

`;