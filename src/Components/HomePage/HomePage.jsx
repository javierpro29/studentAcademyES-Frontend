import React from "react";
import { RiHomeLine, RiUserSharedLine, RiMessage2Line, RiUserLine, RiSettings5Fill, RiNotification3Line, RiSearchEyeLine } from 'react-icons/ri';
import { FaRegCalendarAlt } from 'react-icons/fa';
import style from "./HomePage.module.css";
import signupside from "../../assets/images/LoginImage.png";
import profile from "../../assets/images/profile.jpeg";

const HomePage = () => {
    return (
        <div className={style.homePage}>
            <div className={style.leftSection}>
                <h1>StudentAcademy</h1>
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
                <span className={style.events}><FaRegCalendarAlt className={style.eventsIcon} /> Events</span>
                <div className={style.buttonsRow}>
                    <button className={style.currentButton}>Current</button>
                    <button className={style.completedButton}>Completed</button>
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
