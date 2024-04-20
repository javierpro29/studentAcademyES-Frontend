import React from "react";
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import RightSection from '../Sections/RightSection/RightSection';
import style from "./PrivacitySecurityPage.module.css";
import { RiArrowLeftLine, RiArrowRightLine, RiArrowRightUpLine, RiShieldLine, RiDatabase2Line, RiDeleteBin6Line } from 'react-icons/ri';
import { FaUsersGear } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { IoNotificationsOff } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineContentPaste } from "react-icons/md";


const PrivacitySecurityPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const items = [
        { title: "Audiencia, contenidos y etiquetas", subtitle: "Administra que informacion permites que vean otras personas en StudentAcademy.", icon: <FaUsersGear className={style.faqIcon} /> },
        { title: "Posts", subtitle: "Administra la informacion de tus posts", icon: <FaEdit className={style.faqIcon} /> },
        { title: "Centro de notificaciones", subtitle: "Controla las notificaciones que recibes.", icon: <IoNotificationsOff className={style.faqIcon} /> },
        { title: "Mensajes Directos", subtitle: "Revisa el registro de actividad de tu cuenta.", icon: <AiFillMessage className={style.faqIcon} /> },
        { title: "Contenido que quieres ver", subtitle: "Decide que quieres ver en StudentAcademy.", icon: <MdOutlineContentPaste className={style.faqIcon} /> }
    ];

    return (
        <div className={style.homePage}>
            <LeftSection />
            <div className={style.centerSection}>
                <div className={style.goBackButton} onClick={handleGoBack}>
                    <h2><RiArrowLeftLine className={style.gobackicon} />Privacity and Security</h2>
                </div>

                <h3 className={style.faqTitle}>Tu actividad en student academy</h3>
                {items.map((item, index) => (
                    <div key={index} className={style.faqItem}>
                        {item.icon}
                        <div>
                            <p className={style.faqQuestion}>{item.title}</p>
                            <p className={style.faqAnswer}>{item.subtitle}</p>
                        </div>
                        <RiArrowRightLine className={style.detailIcon} />
                    </div>
                ))}

                <div className={style.footer}>
                    <h4>Más información sobre la privacidad de student academy</h4>
                    <ul>
                        <li><span>Centro de privacidad</span> <RiArrowRightUpLine /></li>
                        <li><span>Política de privacidad</span> <RiArrowRightUpLine /></li>
                        <li><span>Contacto</span> <RiArrowRightUpLine /></li>
                    </ul>
                </div>
            </div>
            <RightSection />
        </div>
    );
};

export default PrivacitySecurityPage;
