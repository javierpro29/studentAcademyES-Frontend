import React from "react";
import LeftSection from '../Sections/LeftSection/LeftSection';
import RightSection from '../Sections/RightSection/RightSection';
import { RiFileGifLine} from 'react-icons/ri';
import { FaRegCalendarAlt, FaRegHeart, FaRegComment, FaShare, FaCloudUploadAlt, FaRegImage, FaPoll, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import style from "./HomePage.module.css";
import signupside from "../../assets/images/LoginImage.png";
import profile from "../../assets/images/profile.png";

const HomePage = () => {

    return (
        <div className={style.homePage}>
            <LeftSection />
            <div className={style.centerSection}>
                <h2>Welcome, Dariel Restituyo</h2>
                <div className={style.topSection}>
                    <img src={profile} alt="Profile" className={style.topprofileImage} />
                    <input type="text" className={style.postInput} placeholder="What's on your mind?" />
                    <button className={style.postButton}>POSTEAR</button>
                </div>
                <div className={style.postIcons}>
                    <button className={style.iconButton}><FaRegImage /></button>
                    <button className={style.iconButton}><RiFileGifLine /></button>
                    <button className={style.iconButton}><FaPoll /></button>
                    <button className={style.iconButton}><FaCalendarAlt /></button>
                    <button className={style.iconButton}><FaMapMarkerAlt /></button>
                </div>
                <span className={style.events}><FaRegCalendarAlt className={style.eventsIcon} /> Events</span>
                <div className={style.buttonsRow}>
                    <button className={style.currentButton}>Following</button>
                    <button className={style.completedButton}>For you</button>
                </div>
                <div className={style.publications}>
                    <div className={style.publication}>
                        <div className={style.profileInfo}>
                            <img src={profile} alt="Profile" className={style.profileImage} />
                            <div className={style.profileDetails}>
                                <p className={style.profileName}>Dariel Restituyo</p>
                                <p className={style.profileHandle}>@restituyo</p>
                            </div>
                            <span className={style.postTime}>1 hour ago</span>
                        </div>
                        <img src={signupside} alt="Background" className={style.image} />
                        <p>This is a sample post text.</p>
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
            <RightSection />
        </div>
    );
};

export default HomePage;
