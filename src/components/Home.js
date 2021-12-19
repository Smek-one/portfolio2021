import styled from "styled-components";
import ProfilPic from "./images/ProfilPic.png";
import { useSpring, animated } from "react-spring";

export default function Home() {
  const styles = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
    config: { duration: 500 },
  });

  const rotate = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 1000 },
  });
  return (
    <Wrapper>
      <animated.div style={styles}>
        <h1 className="title">
          Salut ! Moi c'est Bertrand !<h6>Développeur web junior</h6>
        </h1>

        <animated.div style={rotate}>
          {" "}
          <img src={ProfilPic} alt="profilpic" className="profilPic" />
        </animated.div>

        <p>
          J'ai 36 ans, j'habite en Savoie entre Chambéry et Annecy. Je suis
          actuellement en reconversion professionnelle en tant que développeur
          web full stack avec une spécialisation en PHP/Symfony. Depuis 6 mois,
          je suis une formation à distance parallèlement à mon emploi car je
          souhaite faire de ma passion mon métier. J’ai opté pour la formation
          graduate développeur PHP/Symfony dispensée par Studi qui me permet de
          poursuivre mon activité tout en apprenant ce framework. En plus du
          développement front et back office, la formation comprend aussi le
          maquettage d’application web, le SEO et la spécialisation Symfony.
          J’ai aussi créer le site web e-commerce pour ma compagne avec
          WordPress.
        </p>
      </animated.div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & .title {
    color: #f6f2d4;
    margin-bottom: -10vh;
    font-size: 3rem;
  }

  & p {
    font-size: 1.5rem;
    width: 30vw;
    background: #22577e;
    padding: 5vh;
    border-radius: 10% 20% 5% 18%;
    border: 1px solid #f6f2d4;
    color: #f6f2d4;
    margin: auto;
  }

  & img {
    width: 30%;
    margin: auto;
    margin-bottom: -20vh;
  }

  & h6 {
    font-weight: lighter;
    margin-top: 2vh;
    color: #f6f2d4;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 1.2rem;
    width: 80vw;
    margin: auto;

    & .title {
      font-size: 1.5rem;
    }

    & img {
      width: 50%;
      margin: auto;
      margin-top: 5vh;
      margin-bottom: -5vh;
    }

    & p {
      width: 80vw;
      font-size: 1.2rem;
      margin: auto;
    }
  }
`;
