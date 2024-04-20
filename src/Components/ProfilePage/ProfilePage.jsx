import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import RightSection from '../Sections/RightSection/RightSection';
import { RiArrowLeftLine, RiEdit2Line } from 'react-icons/ri';
import style from "./ProfilePage.module.css";
import {user} from  "../Login/Login"

const ProfilePage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        setIsModalOpen(true);
    };

    const handleSaveProfile = () => {
        localStorage.setItem('profileInfo', JSON.stringify(profileInfo));
        setIsModalOpen(false);
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
                    <h2><RiArrowLeftLine className={style.gobackicon} />Profile</h2>
                </div>

                <div className={style.profileBanner}>
                    <img src={ `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`} alt="Banner" className={style.bannerImage} />
                </div>

                <div className={style.profileImageContainer}>
                    <img src={ `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`} alt="Profile" className={style.profileImage} />
                </div>

                <button className={style.editProfileButton} onClick={handleEditProfile}><RiEdit2Line className={style.iconprofile} /> Edit Profile</button>

                <div className={style.profileInfo}>
                    <p className={style.profileName}>{user ? ( user.firstName + ' '+ user.lastName) : 'usuario no encontrado'}</p>
                    <p className={style.profileHandle}>@{user ? ( user.username ) : 'usuario no encontrado'}</p>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className={style.modal}>
                        <div className={style.modalContent}>
                            <h2>Edit Profile</h2>
                            <input
                                type="text"
                                name="name"
                                value={profileInfo.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                name="handle"
                                value={profileInfo.handle}
                                onChange={handleInputChange}
                                placeholder="Handle"
                            />
                            <div className={style.modalButtons}>
                                <button className={style.modalCancelButton} onClick={() => setIsModalOpen(false)}>
                                    Cancel
                                </button>
                                <button className={style.modalSaveButton} onClick={handleSaveProfile}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div className={style.profileStats}>
                    <div className={style.stat}>
                        <p className={style.statNumber}>0</p>
                        <p className={style.statName}>Amigos</p>
                    </div>
                    <div className={style.stat}>
                        <p className={style.statNumber}>0</p>
                        <p className={style.statName}>Grupos</p>
                    </div>
                    <div className={style.stat}>
                        <p className={style.statNumber}>0</p>
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
