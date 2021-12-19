import styled from "styled-components";
import { BsClock } from "react-icons/bs";
import { MdOutlineSchool, MdOutlineMapsHomeWork } from "react-icons/md";

export default function Skills() {
  return (
    <Wrapper>
      <ul className="timeline">
        <li>
          <div className="timeline-badge">
            <MdOutlineMapsHomeWork className="icon" />
          </div>
          <div className="timeline-panel-container">
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h3>Début</h3>
                <h4>Découverte du développement web</h4>
                <p className="text-muted">
                  <BsClock /> 09/2019 - 01/2020
                </p>
              </div>
              <div className="timeline-body"></div>
              <p>Découverte du développement web avec HTML et CSS.</p>
              <p>
                Découverte des différents langages du développeur web, avec
                différents tutoriels.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge">
            <MdOutlineMapsHomeWork className="icon" />
          </div>
          <div className="timeline-panel-container-inverted">
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h3>Encore un peu</h3>
                <h4>Apprendre PHP et MySQL</h4>
                <p className="text-muted">
                  <BsClock /> 01/2020 - 06/2020
                </p>
              </div>
              <div className="timeline-body"></div>
              <p>Apprentissage du HTML, CSS, Javascript, PHP, MySQL.</p>
              <p>
                Approndissement des différents langages pour créer un site web.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge">
            <MdOutlineMapsHomeWork className="icon" />
          </div>
          <div className="timeline-panel-container">
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h3>Un peu plus</h3>
                <h4>Apprendre le JQuery et BootStrap</h4>
                <p className="text-muted">
                  <BsClock /> 09/2020 - 11/2020
                </p>
              </div>
              <div className="timeline-body"></div>
              <p>Création du site e-commerce pour ma compagne.</p>
              <p>Découverte de Wordpress et de l'hébergement.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge">
            <MdOutlineSchool className="icon" />
          </div>
          <div className="timeline-panel-container-inverted">
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h3>Reconversion professionnelle</h3>
                <h4>Développement web</h4>
                <p className="text-muted">
                  <BsClock /> 03/2021 - aujourd'hui
                </p>
              </div>
              <div className="timeline-body"></div>
              <p>
                Reconversion professionnelle, Graduate Développeur PHP/Symfony,
                chez Studi.
              </p>
              <p>
                HTML, CSS, Javascript, React, PHP, Symfony, React Native,
                Wordpress.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
width: 100vw;
  & ul, ol {
    list-style: none;
}

& .text-muted{
  align-items: center;
}

& .timeline {
    padding: 30px 10px;
    position: relative;
}

& .timeline:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 5px;
    background: #333;
    left: 50%;
    margin-left: -2.5px;
}

& .timeline>li {
    margin-bottom: 10px;
    position: relative;
}

& .timeline>li:after {
    clear: both;
}

.timeline>li:before,
.timeline>li:after {
    content: " ";
    display: table;
}

& .timeline-badge{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50px;
  height: 50px;
}

& .timeline li .timeline-badge {
    color: #95D1CC;
    width: 50px;
    line-height: 50px;
    font-size: 1vw;
    text-align: center;
    position: absolute;
    top: 16px;
    left: 50%;
    margin-left: -25px;
    background: #F6F2D4;
    border-radius: 50%;
}

& .timeline-panel-container {
    width: 50%;
    float: left;
}

& .timeline-panel-container-inverted {
    width: 50%;
    float: right;
}

& .timeline-panel {
    width: 90%;
    float: right;
    margin-right: 40px;
    border-radius: 7px;
    padding: 20px 25px;
    position: relative;
    background: #F6F2D4;
}

& .timeline-panel-container-inverted .timeline-panel {
    float: left;
    margin-left: 40px;
}

& .timeline-panel:after{
	position: absolute;
	top: 27px;
	right: -14px;
	display: inline-block;
	border-top: 14px solid transparent;
	border-left: 14px solid #F6F2D4;
  border-right: 0 solid #F6F2D4;
	border-bottom: 14px solid transparent;
	content: " ";
}

& .timeline-panel-container-inverted .timeline-panel:after{
  border-left-width: 0;
  border-right-width: 14px;
  left: -14px;
  right: auto;
}

@media (max-width: 1024px){
    font-size: .9rem;
    overflow: hidden;
    padding: 5px;
    margin: auto;

    & .timeline-panel-container, .timeline-panel-container-inverted{
      width: 52%;
    }

    & .timeline-panel:after{
	position: absolute;
	top: 27px;
	right: -7px;
	display: inline-block;
	border-top: 14px solid transparent;
	border-left: 14px solid #F6F2D4;
  border-right: 0 solid #F6F2D4;
	border-bottom: 14px solid transparent;
	content: " ";
}

& .timeline-panel-container-inverted .timeline-panel:after{
  border-left-width: 0;
  border-right-width: 14px;
  left: -7px;
  right: auto;
}
    
    & h3, h4{
      font-size: 1rem;
    }
   

    & .timeline {
    padding: 15px 5px;
    
    }

   

    & .timeline-panel {
    width: 40vw;
    height: auto;
    float: right;
    margin-right: 40px;
    border-radius: 7px;
    padding: 20px 25px;
    position: relative;
    background: #F6F2D4;
}



& .icon{
  font-size: 1.5rem;
  
}
  
`;
