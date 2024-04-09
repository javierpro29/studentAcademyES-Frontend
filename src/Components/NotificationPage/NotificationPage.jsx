import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import RightSection from '../Sections/RightSection/RightSection';
import { RiArrowLeftLine } from 'react-icons/ri';
import { MdNotificationsActive } from "react-icons/md";
import style from "./NotificationPage.module.css"
import postprofile1 from "../../assets/images/postprofile1.png";
import postprofile2 from "../../assets/images/postprofile2.png";

const NotificationPage =  () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleButtonClick = (buttonName) => {
        // Aquí puedes implementar lógica adicional para cada botón si es necesario
        console.log(`Click en el botón ${buttonName}`);
    };

    return (
        <div className={style.notificationPage}>
            <LeftSection />

            <div className={style.centerSection}>

                <div className={style.goBackButton} onClick={handleGoBack}>
                    <h2><RiArrowLeftLine className={style.gobackicon} />Notifications</h2>
                </div>

                <div className={style.buttonsRow}>
                    <button className={style.currentButton} onClick={() => handleButtonClick("Todas")}>Todas</button>
                    <button className={style.currentButton} onClick={() => handleButtonClick("Foros")}>Foros</button>
                </div>

                <div className={style.notificationSection}>
                    <p className={style.notification}><MdNotificationsActive className={style.icon}/> Nuevas notificaciones de posts para <img src={postprofile1} alt="Profile" className={style.profileImage} /> <b>Grafic Design Group</b></p>
                    <p className={style.notification}><MdNotificationsActive className={style.icon}/> Tienes 5 comentarios en Nuevas notificaciones de posts para <img src={postprofile2} alt="Profile" className={style.profileImage} /> <b>React Js Vs Angular Vs Vue</b></p>
                </div>

            </div>

            <RightSection />
        </div>
    );
}

export default NotificationPage;