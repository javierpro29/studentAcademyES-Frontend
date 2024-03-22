import React from "react";
import { useNavigate } from 'react-router-dom';
import { RiSearchEyeLine } from 'react-icons/ri';
import style from "./ColaborationSection.module.css";
import profile from "../../../assets/images/profile.png";
import postprofile1 from "../../../assets/images/postprofile1.png";
import postprofile2 from "../../../assets/images/postprofile2.png";

const RightSection = () => {
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        navigate(route); // Redirige a la ruta especificada
    };
    return (
        <div>
            <div className={style.rightSection}>
                <div className={style.searchBoxContainer}>
                    <input type="text" className={style.searchBox} placeholder="Search Teamder" />
                    <RiSearchEyeLine className={style.searchIcon} />
                </div>
                <button className={style.buttonCreate}>CREATE NEW GROUP</button>
                <div className={style.teamRecommendations}>
                    <h2 className={style.sectionTitle}>My Groups Colaborations</h2>
                    {/* Equipo recomendado 1 */}
                    <div className={style.profileInfo} onClick={() => handleNavigation('/profilegroup')}>
                        <img src={postprofile1} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Groupname</p>
                            <p className={style.profileHandle}>Last activity 10 minutes ago</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 2 */}
                    <div className={style.profileInfo}>
                        <img src={postprofile2} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Groupname</p>
                            <p className={style.profileHandle}>Last activity 12 hour ago</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 3 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Groupname</p>
                            <p className={style.profileHandle}>Last activity 4 hour ago</p>
                        </div>
                    </div>
                    <span className={style.showMore}>Show more...</span>
                </div>
                <div className={style.hashtagsRecommendations}>
                    <h2 className={style.sectionTitle}>Another teams interesting</h2>
                    {/* Equipo recomendado 1 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Groupname</p>
                            <p className={style.profileHandle}>Last activity 10 minutes ago</p>
                        </div>
                    </div>
                    <span className={style.showMore}>Show more...</span>
                </div>
            </div>
        </div>
    );
};

export default RightSection;