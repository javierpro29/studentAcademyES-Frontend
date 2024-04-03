import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import RightSection from '../Sections/RightSection/RightSection';
import { RiArrowLeftLine, RiEdit2Line } from 'react-icons/ri';
import style from "./ProfilePage.module.css";
import profile from "../../assets/images/profile.png";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [profileInfo, setProfileInfo] = useState({
        name: "",
        handle: ""
    });

    useEffect(() => {
        const storedProfile = localStorage.getItem('profileInfo');
        if (storedProfile) {
            setProfileInfo(JSON.parse(storedProfile));
        }
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleEditProfile = () => {
        setIsEditing(true);
    };

    const handleSaveProfile = () => {
        localStorage.setItem('profileInfo', JSON.stringify(profileInfo));
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleButtonClick = (buttonName) => {
        // Aquí puedes implementar lógica adicional para cada botón si es necesario
        console.log(`Click en el botón ${buttonName}`);
    };

    return (
        <div className={style.profilePage}>
            <LeftSection />
            <div className={style.centerSection}>

                <div className={style.goBackButton} onClick={handleGoBack}>
                    <h2><RiArrowLeftLine className={style.gobackicon}/>Profile</h2>
                </div>

                <div className={style.profileBanner}>
                    <img src={profile} alt="Banner" className={style.bannerImage} />
                </div>

                <div className={style.profileImageContainer}>
                    <img src={profile} alt="Profile" className={style.profileImage} />
                </div>

                {isEditing ? (
                    <div className={style.editprofile}>
                        <input
                            type="text"
                            name="name"
                            value={profileInfo.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="handle"
                            value={profileInfo.handle}
                            onChange={handleInputChange}
                        />
                        <button className={style.editProfileButton} onClick={handleSaveProfile}>Save</button>
                    </div>
                ) : (
                    <div className={style.editprofile}>
                        <button className={style.editProfileButton} onClick={handleEditProfile}><RiEdit2Line className={style.iconprofile} /> Edit Profile</button>
                    </div>
                )}

                <div className={style.profileInfo}>
                    <p className={style.profileName}>{profileInfo.name}</p>
                    <p className={style.profileHandle}>{profileInfo.handle}</p>
                </div>

                <div className={style.profileStats}>
                    <div className={style.stat}>
                        <p className={style.statNumber}>500</p>
                        <p className={style.statName}>Amigos</p>
                    </div>
                    <div className={style.stat}>
                        <p className={style.statNumber}>50</p>
                        <p className={style.statName}>Grupos</p>
                    </div>
                    <div className={style.stat}>
                        <p className={style.statNumber}>30</p>
                        <p className={style.statName}>Foros</p>
                    </div>
                </div>
                <div className={style.buttonsRow}>
                    <button className={style.currentButton} onClick={() => handleButtonClick("Posts")}>Posts</button>
                    <button className={style.currentButton} onClick={() => handleButtonClick("Proyectos")}>Proyectos</button>
                    <button className={style.currentButton} onClick={() => handleButtonClick("Investigaciones")}>Investigaciones</button>
                </div>
                <div className={style.postSection}>
                    <div className={style.post}>...</div>
                    <div className={style.post}>...</div>
                </div>
                <hr className={style.sectionSeparator} />
                <hr className={style.sectionSeparator} />
            </div>
            <RightSection />
        </div>
    );
};

export default ProfilePage;
