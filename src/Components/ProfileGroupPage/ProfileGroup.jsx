import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import RightSection from '../Sections/RightSection/RightSection';
import ProfileSection from '../Sections/SectionProfileGroup/ProfileSection';
import { RiArrowLeftLine, RiAddLine, RiFileGifLine } from 'react-icons/ri';
import { FaRegImage, FaPoll, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import style from "./ProfileGroup.module.css";
import banner from "../../assets/images/profilegroupbanner.png";
import profile from "../../assets/images/postprofile1.png";
import profileimage from "../../assets/images/profile.png";

const ProfileGroupPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className={style.profilePage}>
            <LeftSection />
            <div className={style.centerSection}>

                <div className={style.goBackButton} onClick={handleGoBack}>
                    <h2><RiArrowLeftLine className={style.gobackicon} />Profile Group</h2>
                </div>

                <div className={style.profileBanner}>
                    <img src={banner} alt="Banner" className={style.bannerImage} />
                </div>

                <div className={style.profileInfo}>
                    <div className={style.profileImageContainer}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                    </div>
                    <p className={style.profileName}>Graphic Design Group</p>
                </div>

                <div className={style.editprofile}>
                    <button className={style.editProfileButton} id={style.btninvite}><RiAddLine className={style.iconprofile} /> Invite</button>
                    <button className={style.editProfileButton}>Share</button>
                    <button className={style.editProfileButton}>Edit</button>
                </div>

                <br/>
                <hr className={style.sectionSeparator} />

                <div className={style.topSection}>
                    <img src={profileimage} alt="Profile" className={style.topprofileImage} />
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

                <div className={style.postSection}>
                    <div className={style.post}>...</div>
                    <div className={style.post}>...</div>
                </div>
                <hr className={style.sectionSeparator} />
                <hr className={style.sectionSeparator} />
            </div>
            <ProfileSection />
        </div>
    );
};

export default ProfileGroupPage;
