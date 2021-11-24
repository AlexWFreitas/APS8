import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import BackgroundImage from "../../resources/images/bg.jpg";

const Home = () => {

  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  if (content != "Authenticated")
  {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{content}</h3>
        </header>
      </div>
    );
  }

  return (
    <div className="position-relative" style= {{ backgroundColor: "black" }}>
        <h1 className="d-none vw-100 px-5 d-lg-block display-3 text-danger fw-bolder position-absolute position-absolute top-50 start-50 translate-middle text-center" 
            style={{textShadow: "2px 2px 2px black" }}>Sistema de Controle e Prevenção de Incêndios</h1>
        <img className="vw-100"
        src={BackgroundImage} alt="Smoke in the air" />
      
      <div className="container mt-3 text-white" style= {{ backgroundColor: "black" }}>
        <p>Seja bem vindo ao Sistema de Controle e Prevenção de Incêndios.</p>
        <p>Nesse sistema, qualquer usuário pode fazer um relato de um incêndio que ele tenha presenciado, fornecendo informações para que as autoridades mais próximas possam atuar para combater o incêndio e reduzir os danos causados.</p>      
      </div>
    </div>
  );
};

export default Home;
