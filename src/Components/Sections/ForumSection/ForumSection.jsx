import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { RiSearchEyeLine } from 'react-icons/ri';
import CreateForumModal from "../../ForumPage/CreateForumModal";
import style from "./ForumSection.module.css";
import profile from "../../../assets/images/profile.png";

const ForumSection = () => {
    const navigate = useNavigate();
    const [myForums, setMyForums] = useState([]);
    const [otherForums, setOtherForums] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedMyForums = JSON.parse(localStorage.getItem('myForums')) || [];
        const storedOtherForums = JSON.parse(localStorage.getItem('otherForums')) || [];
        setMyForums(storedMyForums);
        setOtherForums(storedOtherForums);
    }, []);

    const handleNavigation = (route) => {
        navigate(route);
    };

    const toggleCreateForumModal = () => {
        setShowModal(!showModal);
    };

    const handleCreateForum = (newForum) => {
        const updatedMyForums = [...myForums, newForum];
        setMyForums(updatedMyForums);
        localStorage.setItem('myForums', JSON.stringify(updatedMyForums));
        toggleCreateForumModal();
        navigate(`/forum/${newForum.id}`);
    };

    return (
        <div>
            <div className={style.rightSection}>
                <div className={style.searchBoxContainer}>
                    <input type="text" className={style.searchBox} placeholder="Buscar Discusión" />
                    <RiSearchEyeLine className={style.searchIcon} />
                </div>
                <button className={style.buttonCreate} onClick={toggleCreateForumModal}>CREAR NUEVO FORO</button>
                <CreateForumModal show={showModal} onClose={toggleCreateForumModal} onCreateForum={handleCreateForum} />
                <div className={style.teamRecommendations}>
                    <h2 className={style.sectionTitle}>Mis Foros</h2>
                    {myForums.map((forum) => (
                        <div
                            key={forum.id}
                            className={style.profileInfo}
                            onClick={() => handleNavigation(`/forum/${forum.id}`)}
                        >
                            <img src={forum.imageUrl} alt="Forum" className={style.profileImage} />
                            <div className={style.profileDetails}>
                                <p className={style.profileName}>{forum.title}</p>
                                <p className={style.profileHandle}>{forum.lastActivity}</p>
                            </div>
                        </div>
                    ))}
                    {myForums.length > 0 && <span className={style.showMore}>Mostrar más...</span>}
                </div>
                <div className={style.hashtagsRecommendations}>
                    <h2 className={style.sectionTitle}>Otros foros interesantes</h2>
                    {otherForums.map((forum) => (
                        <div
                            key={forum.id}
                            className={style.profileInfo}
                            onClick={() => handleNavigation(`/forum/${forum.id}`)}
                        >
                            <img src={forum.imageUrl} alt="Forum" className={style.profileImage} />
                            <div className={style.profileDetails}>
                                <p className={style.profileName}>{forum.title}</p>
                                <p className={style.profileHandle}>{forum.lastActivity}</p>
                            </div>
                        </div>
                    ))}
                    {otherForums.length > 0 && <span className={style.showMore}>Mostrar más...</span>}
                </div>
            </div>
        </div>
    );
};

export default ForumSection;
