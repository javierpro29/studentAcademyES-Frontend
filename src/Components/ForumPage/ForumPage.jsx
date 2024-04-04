import React from "react";
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import ForumSection from '../Sections/ForumSection/ForumSection';
import { RiArrowLeftLine } from 'react-icons/ri';
import style from "./ForumPage.module.css";
import postprofile1 from "../../assets/images/postprofile1.png";
import profile from "../../assets/images/forumprofile.png";

const ForumPage = () => {
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
                    <h2><RiArrowLeftLine className={style.gobackicon} />Forums</h2>
                </div>

                <div className={style.topSection}>
                    <img src={profile} alt="Profile" className={style.topImage} />
                    <div>
                        <h2 className={style.title}>React Js Vs Angular Vs Vue</h2>
                        <h3 className={style.subtitle}>Forum Description</h3>
                        <p className={style.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus harum ipsa sed quod quos enim quas reiciendis vero nobis deleniti magni, architecto nisi nesciunt, illo quidem ipsam tempore repellat magnam.</p>
                    </div>
                </div>

                <div className={style.response}>
                    <button className={style.responsebutton}>Response</button>
                </div>

                <div className={style.publications}>
                    {/*FORO 1*/}
                    <div className={style.publication}>
                        <div className={style.messageContainer}>
                            <div className={style.profileInfo}>
                                <img src={postprofile1} alt="Profile" className={style.profileImage} />
                            </div>
                            <div className={style.messageBox}>
                                <div className={style.messageTriangle} />
                                <h3 className={style.messageTitle}>Title</h3>
                                <p className={style.messageContent}>
                                    We are looking for a young superhero to join our team! We require basic telekinesis skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                </p>
                                <span className={style.postTime}>Reply</span>
                            </div>
                        </div>
                    </div>
                    {/*FORO 2*/}
                    <div className={style.publication}>
                        <div className={style.messageContainer}>
                            <div className={style.profileInfo}>
                                <img src={postprofile1} alt="Profile" className={style.profileImage} />
                            </div>
                            <div className={style.messageBox}>
                                <div className={style.messageTriangle} />
                                <h3 className={style.messageTitle}>Title</h3>
                                <p className={style.messageContent}>
                                    We are looking for a young superhero to join our team! We require basic telekinesis skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                </p>
                                <span className={style.postTime}>Reply</span>
                            </div>
                        </div>
                    </div>
                    {/*FORO 3*/}
                    <div className={style.publication}>
                        <div className={style.messageContainer}>
                            <div className={style.profileInfo}>
                                <img src={postprofile1} alt="Profile" className={style.profileImage} />
                            </div>
                            <div className={style.messageBox}>
                                <div className={style.messageTriangle} />
                                <h3 className={style.messageTitle}>Title</h3>
                                <p className={style.messageContent}>
                                    We are looking for a young superhero to join our team! We require basic telekinesis skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                                </p>
                                <span className={style.postTime}>Reply</span>
                            </div>
                        </div>
                    </div>
                </div>


                <hr className={style.sectionSeparator} />
                <hr className={style.sectionSeparator} />
                {/* Más publicaciones */}
            </div>
            <ForumSection />
        </div>
    );
};

export default ForumPage;
