import React from "react";
import { RiSearchEyeLine} from 'react-icons/ri';
import style from "./RightSection.module.css";
import profile from "../../../assets/images/profile.png";
import {user} from  "../../Login/Login"

const RightSection = () => {
  return (
    <div>
      <div className={style.rightSection}>
                <div className={style.searchBoxContainer}>
                    <input type="text" className={style.searchBox} placeholder="Search People" />
                    <RiSearchEyeLine className={style.searchIcon} />
                </div>
                <div className={style.teamRecommendations}>
                    <h2 className={style.sectionTitle}>People for you</h2>
                    {/* Equipo recomendado 1 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Julian Modesto (Estudiante)</p>
                            <p className={style.profileHandle}>@julian002</p>
                        </div>
                        <button className={style.buttonMore}>Follow</button>
                    </div>
                    {/* Equipo recomendado 2 */}
                    <div className={style.profileInfo}>
                        <img src={ `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>{user ? ( user.firstName + ' '+ user.lastName + ' '+ '('+ user.rol.rolname + ')') : 'usuario no encontrado'}</p>
                            <p className={style.profileHandle}>@{user ? ( user.username ) : 'nombre de usuario no encontrado'}</p>
                        </div>
                        <button className={style.buttonMore}>Follow</button>
                    </div>
                    {/* Equipo recomendado 3 */}
                    <span className={style.showMore}>Show more</span>
                </div>
                <div className={style.hashtagsRecommendations}>
                    <h2 className={style.sectionTitle}>Hashtags for you</h2>
                    {/* Hashtag recomendado 1 */}
                    <div className={style.hashtagsDetails}>
                        <p className={style.hashtags}>#frontend</p>
                        <p className={style.teams}>1,222 teams</p>
                    </div>
                    {/* Hashtag recomendado 2 */}
                    <div className={style.hashtagsDetails}>
                        <p className={style.hashtags}>#backend</p>
                        <p className={style.teams}>944 teams</p>
                    </div>
                    {/* Hashtag recomendado 3 */}
                    <span className={style.showMore}>Show more</span>
                </div>
            </div>
    </div>
  );
};

export default RightSection;