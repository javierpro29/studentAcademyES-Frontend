import React from "react";
import { RiHomeLine, RiUserSharedLine, RiMessage2Line, RiUserLine, RiSettings5Fill, RiNotification3Line, RiSearchEyeLine, RiFileGifLine } from 'react-icons/ri';
import { FaRegCalendarAlt, FaRegHeart, FaRegComment, FaShare, FaCloudUploadAlt, FaRegImage, FaGit, FaPoll, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'; // Importa los iconos necesarios
import style from "./HomePage.module.css";
import signupside from "../../assets/images/LoginImage.png";
import profile from "../../assets/images/profile.jpeg";
import logoImg from "../../assets/images/Logo2.png";

const HomePage = () => {
    return (
        <div className={style.homePage}>
            <div className={style.leftSection}>
                <h1><img src={logoImg} alt="Logo" className={style.logo} />StudentAcademy</h1>
                <div className={style.navButtons}>
                    <div className={style.navButton}><RiHomeLine /> Home</div>
                    <div className={style.navButton}><RiUserSharedLine /> My TEAMS</div>
                    <div className={style.navButton}><RiMessage2Line /> Teamvites</div>
                    <div className={style.navButton}><RiNotification3Line /> Notifications</div>
                    <div className={style.navButton}><RiUserLine /> Profile</div>
                </div>
                <button className={style.createTeamButton}>Create a Team</button>
                <div className={style.profileInfo}>
                    <img src={profile} alt="Profile" />
                    <div>
                        <p className={style.profileName}>Dariel Restituyo</p>
                        <p className={style.profileHandle}>@restituyo</p>
                    </div>
                    <RiSettings5Fill className={style.settingsIcon} />
                </div>
            </div>
            <div className={style.centerSection}>
                <h2>Welcome, Dariel Restituyo</h2>
                <div className={style.topSection}>
                    <img src={profile} alt="Profile" className={style.topprofileImage} />
                    <input type="text" className={style.postInput} placeholder="What's on your mind?" />
                    <button className={style.postButton}>POST</button>
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

export default HomePage;
