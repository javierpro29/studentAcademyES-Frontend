import React from "react";
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import MessageSection from '../Sections/MessageSection/MessageSection';
import { RiArrowLeftLine } from 'react-icons/ri';
import style from "./MessagePage.module.css";
import profile from "../../assets/images/profile.png";

const MessagePage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleNavigation = (route) => {
        navigate(route); // Redirige a la ruta especificada
    };

    return (
        <div className={style.homePage}>
            <LeftSection />
            <div className={style.centerSection}>

                <div className={style.goBackButton} onClick={handleGoBack}>
                    <h2><RiArrowLeftLine className={style.gobackicon} />Messenger</h2>
                </div>

                <div className={style.topSection}>
                    <img src={profile} alt="Profile" className={style.topImage} />
                    <div>
                        <h2 className={style.title}>Name Lastname</h2>
                        <h3 className={style.subtitle}>@username</h3>
                    </div>
                </div>

                <div className={style.publications}>
                    {/*MENSAJE 1*/}
                    <div className={style.publication}>
                        <div className={style.messageContainer}>
                            <div className={style.profileInfo}>
                                <img src={profile} alt="Profile" className={style.profileImage} />
                            </div>
                            <div className={style.messageBox}>
                                <div className={style.messageTriangle} />
                                <p className={style.messageContent}>
                                    Hello, What's going on?
                                </p>
                                <span className={style.postTime}>Reply</span>
                            </div>
                        </div>
                    </div>
                    {/*MENSAJE 2*/}
                    <div className={style.publication}>
                        <div className={style.messageContainer}>
                            <div className={style.profileInfo}>
                                <img src={profile} alt="Profile" className={style.profileImage} />
                            </div>
                            <div className={style.messageBox}>
                                <div className={style.messageTriangle} />
                                <p className={style.messageContent}>
                                    We are looking for a young superhero to join our team! We require basic telekinesis skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                </p>
                                <span className={style.postTime}>Reply</span>
                            </div>
                        </div>
                    </div>
                    {/*MENSAJE 3*/}
                    <div className={style.publication}>
                        <div className={style.messageContainer}>
                            <div className={style.profileInfo}>
                                <img src={profile} alt="Profile" className={style.profileImage} />
                            </div>
                            <div className={style.messageBox}>
                                <div className={style.messageTriangle} />
                                <p className={style.messageContent}>
                                    We are looking for a young superhero to join our team! We require basic telekinesis skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                </p>
                                <span className={style.postTime}>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={style.footer}>
                    <form>
                        <input type="textarea" name=""></input>
                        <button>SEND</button>
                    </form>
                </div>
            </div>
            <MessageSection />
        </div>
    );
};

export default MessagePage;
