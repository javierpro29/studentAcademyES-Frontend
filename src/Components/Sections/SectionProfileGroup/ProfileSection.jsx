import React from "react";
import { RiSearchEyeLine, RiUser3Fill, RiFileGifLine } from 'react-icons/ri';
import style from "./ProfileSection.module.css";
import profile from "../../../assets/images/profile.png";
import postprofile1 from "../../../assets/images/postprofile1.png";
import postprofile2 from "../../../assets/images/postprofile2.png";

const ProfileSection = () => {
    return (
        <div>
            <div className={style.rightSection}>
                <div className={style.searchBoxContainer}>
                    <input type="text" className={style.searchBox} placeholder="Search" />
                    <RiSearchEyeLine className={style.searchIcon} />
                </div>

                <div className={style.teamRecommendations}>
                    <h2 className={style.sectionTitle}>Information Group</h2>
                    <div className={style.InfoGroup}>
                        <p className={style.members}><RiUser3Fill className={style.icon} />1.2K Members</p>
                        <p className={style.posts}><RiFileGifLine className={style.icon} />24 Posts</p>
                    </div>
                </div>

                <div className={style.hashtagsRecommendations}>
                    <h2 className={style.sectionTitle}>Group Members</h2>
                    {/* Miembro 1 */}
                    <div className={style.MemberGroup}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>User</p>
                            <p className={style.profileHandle}>@user</p>
                        </div>
                    </div>
                    {/* Miembro 2 */}
                    <div className={style.MemberGroup}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>User</p>
                            <p className={style.profileHandle}>@user</p>
                        </div>
                    </div>
                    {/* Miembro 3 */}
                    <div className={style.MemberGroup}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>User</p>
                            <p className={style.profileHandle}>@user</p>
                        </div>
                    </div>
                    {/* Miembro 4 */}
                    <div className={style.MemberGroup}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>User</p>
                            <p className={style.profileHandle}>@user</p>
                        </div>
                    </div>
                    <span className={style.showMore}>Show more...</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;