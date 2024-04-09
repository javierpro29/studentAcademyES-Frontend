import React from "react";
import { useNavigate } from 'react-router-dom';
import { RiSearchEyeLine } from 'react-icons/ri';
import style from "./NotificationSection.module.css";
import profile from "../../../assets/images/profile.png";

const MessageSection = () => {
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        navigate(route); // Redirige a la ruta especificada
    };

    return (
        <div>
            <div className={style.rightSection}>
                <div className={style.searchBoxContainer}>
                    <input type="text" className={style.searchBox} placeholder="Search Contact" />
                    <RiSearchEyeLine className={style.searchIcon} />
                </div>

                {/* Mis colaboraciones */}
                <div className={style.teamRecommendations}>
                    <h2 className={style.sectionTitle}>Messages</h2>
                    {/* Equipo recomendado 1 */}
                    <div className={style.profileInfo} onClick={() => handleNavigation('/profilegroup')}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Name Lastname</p>
                            <p className={style.profileHandle}>@username</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 2 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Name Lastname</p>
                            <p className={style.profileHandle}>@username</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 3 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Name Lastname</p>
                            <p className={style.profileHandle}>@username</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 4 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Name Lastname</p>
                            <p className={style.profileHandle}>@username</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 5 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Name Lastname</p>
                            <p className={style.profileHandle}>@username</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 6 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Name Lastname</p>
                            <p className={style.profileHandle}>@username</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 7 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Name Lastname</p>
                            <p className={style.profileHandle}>@username</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 8 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Name Lastname</p>
                            <p className={style.profileHandle}>@username</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 9 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Name Lastname</p>
                            <p className={style.profileHandle}>@username</p>
                        </div>
                    </div>
                    <span className={style.showMore}>Show more...</span>
                </div>
            </div>
        </div>
    );
};

export default MessageSection;
