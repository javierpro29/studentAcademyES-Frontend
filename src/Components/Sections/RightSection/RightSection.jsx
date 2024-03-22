import React from "react";
import { RiSearchEyeLine} from 'react-icons/ri';
import style from "./RightSection.module.css";
import profile from "../../../assets/images/profile.png";

const RightSection = () => {
  return (
    <div>
      <div className={style.rightSection}>
                <div className={style.searchBoxContainer}>
                    <input type="text" className={style.searchBox} placeholder="Search Teamder" />
                    <RiSearchEyeLine className={style.searchIcon} />
                </div>
                <div className={style.teamRecommendations}>
                    <h2 className={style.sectionTitle}>Teams for you</h2>
                    {/* Equipo recomendado 1 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Dariel Restituyo</p>
                            <p className={style.profileHandle}>@restituyo</p>
                        </div>
                        <button className={style.buttonMore}>More</button>
                    </div>
                    {/* Equipo recomendado 2 */}
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