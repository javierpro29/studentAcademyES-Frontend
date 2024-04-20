// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import ColaborationSection from '../Sections/SectionColaboration/ColaborationSection';
import { RiArrowLeftLine } from 'react-icons/ri';
import { FaRegHeart, FaRegComment, FaShare, FaCloudUploadAlt } from 'react-icons/fa';
import style from "./ColaborationGroup.module.css";
import postimage from "../../assets/images/postimage1.png";
import postimage2 from "../../assets/images/postimage2.png";
import postprofile1 from "../../assets/images/postprofile1.png";
import postprofile2 from "../../assets/images/postprofile2.png";

const ColaborationPage = () => {
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
                    <h2><RiArrowLeftLine className={style.gobackicon} />Colaboration Groups</h2>
                </div>


                <div className={style.buttonsRow}>
                    <span className={style.events}>Actividad Reciente</span>
                </div>
                <div className={style.publications}>
                    <div className={style.publication} onClick={() => handleNavigation('/profilegroup')}>
                        <div className={style.profileInfo}>
                            <img src={postprofile1} alt="Profile" className={style.profileImage} />
                            <div className={style.profileDetails}>
                                <p className={style.profileName}>Groupname</p>
                                <p className={style.profileHandle}>Username</p>
                            </div>
                            <span className={style.postTime}>3 minutes ago</span>
                        </div>
                        <img src={postimage} alt="Background" className={style.image} />
                        <p>We are looking for a young superhero to join our team! We require basic telekinesis skills We are looking for a young superhero to join our team! We require basic telekinesis skills </p>
                        <div className={style.interactionButtons}>
                            <button className={style.interactionButton}><FaRegHeart /> 10</button>
                            <button className={style.interactionButton}><FaRegComment /> 5</button>
                            <button className={style.interactionButton}><FaShare /> 3</button>
                            <button className={style.interactionButton}><FaCloudUploadAlt /></button>
                        </div>
                    </div>
                    <div className={style.publication}>
                        <div className={style.profileInfo}>
                            <img src={postprofile2} alt="Profile" className={style.profileImage} />
                            <div className={style.profileDetails}>
                                <p className={style.profileName}>Groupname</p>
                                <p className={style.profileHandle}>Username</p>
                            </div>
                            <span className={style.postTime}>3 minutes ago</span>
                        </div>
                        <img src={postimage2} alt="Background" className={style.image} />
                        <p>We are looking for a young superhero to join our team! We require basic telekinesis skills We are looking for a young superhero to join our team! We require basic telekinesis skills </p>
                        <div className={style.interactionButtons}>
                            <button className={style.interactionButton}><FaRegHeart /> 10</button>
                            <button className={style.interactionButton}><FaRegComment /> 5</button>
                            <button className={style.interactionButton}><FaShare /> 3</button>
                            <button className={style.interactionButton}><FaCloudUploadAlt /></button>
                        </div>
                    </div>
                    {/* Otras publicaciones */}
                </div>
                <hr className={style.sectionSeparator} />
                <hr className={style.sectionSeparator} />
                {/* Más publicaciones */}
            </div>
            <ColaborationSection />
        </div>
    );
};

export default ColaborationPage;
