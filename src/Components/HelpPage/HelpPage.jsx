import React from "react";
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import RightSection from '../Sections/RightSection/RightSection';
import style from "./HelpPage.module.css";
import { RiArrowLeftLine, RiQuestionLine } from 'react-icons/ri';

const HelpPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const faqs = [
        {
            question: "¿Cómo puedo cambiar mi contraseña?",
            answer: "Puedes cambiar tu contraseña desde la sección de configuración de tu perfil."
        },
        {
            question: "¿Cómo puedo contactar con soporte?",
            answer: "Puedes contactar con soporte usando el formulario de contacto disponible en la sección de ayuda."
        },
        {
            question: "¿Dónde encuentro mis facturas?",
            answer: "Tus facturas están disponibles en la sección 'Facturas' dentro de tu perfil."
        },
        {
            question: "¿Cómo puedo cancelar mi suscripción?",
            answer: "Para cancelar tu suscripción, ve a la sección de configuración y selecciona 'Cancelar suscripción'."
        },
        {
            question: "¿Puedo exportar mis datos?",
            answer: "Sí, puedes exportar tus datos desde la sección de configuración de tu perfil seleccionando 'Exportar Datos'."
        },
        {
            question: "¿Qué métodos de pago están disponibles?",
            answer: "Aceptamos tarjetas de crédito, débito y pagos a través de PayPal."
        }
    ];

    return (
        <div className={style.homePage}>
            <LeftSection />
            <div className={style.centerSection}>

                <div className={style.goBackButton} onClick={handleGoBack}>
                    <h2><RiArrowLeftLine className={style.gobackicon} />Help Center</h2>
                </div>

                <h3 className={style.faqTitle}>Preguntas Frecuentes</h3>
                
                {faqs.map(faq => (
                    <div className={style.faqItem}>
                        <RiQuestionLine className={style.faqIcon} />
                        <div>
                            <p className={style.faqQuestion}>{faq.question}</p>
                            <p className={style.faqAnswer}>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
            <RightSection />
        </div>
    );
};

export default HelpPage;
