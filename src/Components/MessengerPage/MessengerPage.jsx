import React from "react";
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import MessageSection from '../Sections/MessageSection/MessageSection';
import style from "./MessengerPage.module.css"
import { RiArrowLeftLine } from 'react-icons/ri';

const MessengerPage = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className={style.homePage}>
            <LeftSection />
            <div className={style.centerSection}>

                <div className={style.goBackButton} onClick={handleGoBack}>
                    <h2><RiArrowLeftLine className={style.gobackicon} />Messenger</h2>
                </div>

                <div className={style.notification}>
                <h1>Selecciona un mensaje</h1>
                <h3>Elige entre tus contactos existentes</h3>
                <h3>Inicia una conversación</h3>
                </div>

            </div>
            <MessageSection />
        </div>
    );

}
export default MessengerPage;