import React, { useState } from "react";
//import { Link } from "react-router-dom/cjs/react-router-dom";
//import { env } from "../../config.js";
import style from "./LandinPage.module.css";
import backgroundImg from "../../assets/images/LoginImage.png";
import girlImg from "../../assets/images/girl_university.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={style.landing}>
      <div className={style.background} style={{ backgroundImage: `url(${backgroundImg})` }}></div>
      <div className={style.content}>
        <div className={style.leftContent}>
          <h1 className={style.title}>StudentAcademy</h1>
          <p className={style.description}>Un espacio digital dinámico donde la comunidad universitaria pueda conectarse, compartir conocimientos, colaborar en proyectos académicos y explorar oportunidades globales de aprendizaje</p>
          <div className={style.buttons}>
            <Link to="/register">
              <button className={style.registerButton}>Register</button>
            </Link>
            <Link to="/login">
              <button className={style.loginButton}>Login Now</button>
            </Link>
          </div>
        </div>
        <div className={style.rightContent}>
          <img src={girlImg} alt="Girl walking to university" className={style.image} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;