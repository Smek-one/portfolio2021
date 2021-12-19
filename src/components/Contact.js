import styled from "styled-components";
import ProfilPic2 from "./images/ProfilPic2.png";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  function refreshPage() {
    window.location.reload(false);
  }
  const [name, setName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");

  const setNameHandler = (event) => {
    setName(event.target.value);
  };
  const setFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const setemailHandler = (event) => {
    setemail(event.target.value);
  };
  const setMessageHandler = (event) => {
    setMessage(event.target.value);
  };

  const expenseForm = {
    name: setName,
    firstname: setFirstName,
    email: setemail,
    message: setMessage,
  };

  const clearFields = (event) => {
    Array.from(event.target).forEach((e) => (e.value = ""));
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    clearFields(event);
    setName("");
    setFirstName("");
    setemail("");
    setMessage("");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kg2glyi",
        "template_72yl69o",
        form.current,
        "user_cZDC52GSvVI7s0TILGvjF"
      )
      .then(
        (result) => {
          console.log("Success!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <Wrapper>
        <div className="textForm">
          <p>
            Mon profil vous intéresse ? Vous avez besoin d'un développeur Full
            Stack ? React, Javascript, PHP, Symfony...
          </p>
          <img className="pic" src={ProfilPic2} alt="profilPic"></img>
          <p>Contactez-moi !</p>
        </div>

        <div className="contactForm" onSubmit={sendEmail}>
          <form ref={form} onSubmit={refreshPage} id="form">
            <label for="name"></label>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              onChange={setNameHandler}
            />
            <label for="firstname"></label>
            <input
              type="text"
              name="firstname"
              placeholder="Prénom"
              onChange={setFirstNameHandler}
            />
            <label for="email"></label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={setemailHandler}
            />
            <label for="message"></label>
            <textarea
              name="message"
              placeholder="Message"
              onChange={setMessageHandler}
            />
            <input
              className="button"
              type="submit"
              value="Envoyer"
              onChange={expenseForm}
            />
          </form>
        </div>
      </Wrapper>
      <h2>À bientôt !</h2>
    </>
  );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & .button{
        display: block;
        background: #F6F2D4;
        color: #22577E;
        border: none;
        margin-top: 1vh;
        width: 20% !important;
        margin: auto;
        border-radius: 15px;
        font-size: 1.3rem;

    }

    & .button:hover{
        background: #22577E;
        color: #F6F2D4;
        border: 1px solid #F6F2D4;
        font-size: 1.2rem;
    }

    & .button:focus {
        outline: 0;
        background: #F6F2D4;
        color: #22577E;
        border: 1px solid #22577E;
        font-size: 1.3rem;
        }

    & .contactForm{
        display:grid;
        width: 40vw;
        height: 50vh;
        float: right;
        background: #95D1CC;
        padding: 2vw;
        border-radius: 0 10px 10px 0;

        & input{
            width:60%;
            text-align: center;
            border-radius: 15px;
            margin-top: 2vh;
            border: none;
        }
    }

    & textarea{
        resize: none;
        width: 60%;
        height: 25vh;
        border: none;
        border-radius: 15px;
        margin-top: 2vh;
        text-align: center;

    }

    & .messageArea{
        height: 20vh;
    }

     & img{
        width: 15vw;
    }

    & .textForm{
        width: 40vw;
        height: 50vh;
        float: left;
        background: #F6F2D4;
        font-size: 1.6rem;
        padding: 2vw;
        border-radius: 10px 0 0 10px;
        }  

        & p{
            width: 50%;
            margin: auto;
            font-size: 1rem;
            margin: auto;
            font-size: 1.6rem;
            color: #22577E;
        }
    }
  
    @media (max-width: 1024px){
        display: grid;
        grid-template-column: 1fr 1fr;

        & .contactForm{
            width: 90vw;
            height: auto;
            border-radius: 15px;

            & .button{
                width: 30vw !important;
            }

            & textarea{
                width: 90%;
            }
        }
        & img{
            width: 35vw;
            float: center;
        }

        & .textForm{
            width: 90vw;
            height: auto;
            font-size: 1rem;
            border-radius: 15px;

        }
    }
     
`;
