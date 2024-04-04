import React from "react";
import { useNavigate } from 'react-router-dom';
import { RiSearchEyeLine } from 'react-icons/ri';
import style from "./ForumSection.module.css";
import profile from "../../../assets/images/profile.png";
import postprofile1 from "../../../assets/images/forumprofile.png";
import postprofile2 from "../../../assets/images/forumprofile2.png";
import postprofile3 from "../../../assets/images/forumprofile3.png";
import postprofile4 from "../../../assets/images/forumprofile4.png";

const ForumSection = () => {
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        navigate(route); // Redirige a la ruta especificada
    };
    return (
        <div>
            <div className={style.rightSection}>
                <div className={style.searchBoxContainer}>
                    <input type="text" className={style.searchBox} placeholder="Search Discussion" />
                    <RiSearchEyeLine className={style.searchIcon} />
                </div>
                <button className={style.buttonCreate}>CREATE NEW FORUM</button>
                <div className={style.teamRecommendations}>
                    <h2 className={style.sectionTitle}>My Forums</h2>
                    {/* Equipo recomendado 1 */}
                    <div className={style.profileInfo} onClick={() => handleNavigation('/profilegroup')}>
                        <img src={postprofile1} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>React Js Vs Angular Vs Vue</p>
                            <p className={style.profileHandle}>Last activity 10 minutes ago</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 2 */}
                    <div className={style.profileInfo}>
                        <img src={postprofile2} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Cuanto cobrar siendo Junior</p>
                            <p className={style.profileHandle}>Last activity 12 hour ago</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 3 */}
                    <div className={style.profileInfo}>
                        <img src={postprofile3} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Better Tecnologies Backend</p>
                            <p className={style.profileHandle}>Last activity 4 hour ago</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 4 */}
                    <div className={style.profileInfo}>
                        <img src={postprofile4} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>SQL vs NoSQL</p>
                            <p className={style.profileHandle}>Last activity 8 hour ago</p>
                        </div>
                    </div>
                    <span className={style.showMore}>Show more...</span>
                </div>
                <div className={style.hashtagsRecommendations}>
                    <h2 className={style.sectionTitle}>Another forums interesting</h2>
                    {/* Equipo recomendado 1 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>ForumName</p>
                            <p className={style.profileHandle}>Last activity 10 minutes ago</p>
                        </div>
                    </div>
                    <span className={style.showMore}>Show more...</span>
                </div>
            </div>
        </div>
    );
};

export default ForumSection;