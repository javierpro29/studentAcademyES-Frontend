import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RiSearchEyeLine } from 'react-icons/ri';
import style from "./ColaborationSection.module.css";
import profile from "../../../assets/images/profile.png";
import postprofile1 from "../../../assets/images/postprofile1.png";
import postprofile2 from "../../../assets/images/postprofile2.png";

const RightSection = () => {
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        navigate(route); // Redirige a la ruta especificada
    };

    const [showModal, setShowModal] = useState(false);

    const [image, setImage] = useState(null);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //falta logica de formulario
        console.log("Formulario enviado");
        console.log("Imagen seleccionada:", image);
        closeModal(); // Cerrar el formulario después de enviar los datos
    };

    // Función para manejar la carga de la imagen
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <div>
            <div className={style.rightSection}>
                <div className={style.searchBoxContainer}>
                    <input type="text" className={style.searchBox} placeholder="Search Group" />
                    <RiSearchEyeLine className={style.searchIcon} />
                </div>
                <button className={style.buttonCreate} onClick={openModal}>CREATE NEW GROUP</button>
                {/* Formulario emergente */}
                {showModal && (
                    <div className={style.modal}>
                        <div className={style.modalContent}>
                            <span className={style.closeModal} onClick={closeModal}>&times;</span>
                            <h2>Create New Group</h2>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="groupName" className={style.label}>Group Name:</label>
                                <input type="text" id="groupName" name="groupName" required />

                                <label htmlFor="description" className={style.label}>Description:</label>
                                <textarea id="description" name="description" required></textarea>

                                {/* Campo de carga de imagen */}
                                <label htmlFor="image" className={style.label}>Group Image:</label>
                                <input type="file" id="image" name="image" onChange={handleImageChange} accept="image/*" />

                                <button type="submit">Create Group</button>
                            </form>
                        </div>
                    </div>
                )}
                {/* Mis colaboraciones */}
                <div className={style.teamRecommendations}>
                    <h2 className={style.sectionTitle}>My Groups Colaborations</h2>
                    {/* Equipo recomendado 1 */}
                    <div className={style.profileInfo} onClick={() => handleNavigation('/profilegroup')}>
                        <img src={postprofile1} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Groupname</p>
                            <p className={style.profileHandle}>Last activity 10 minutes ago</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 2 */}
                    <div className={style.profileInfo}>
                        <img src={postprofile2} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Groupname</p>
                            <p className={style.profileHandle}>Last activity 12 hour ago</p>
                        </div>
                    </div>
                    {/* Equipo recomendado 3 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Groupname</p>
                            <p className={style.profileHandle}>Last activity 4 hour ago</p>
                        </div>
                    </div>
                    <span className={style.showMore}>Show more...</span>
                </div>
                {/* Otros equipos interesantes */}
                <div className={style.hashtagsRecommendations}>
                    <h2 className={style.sectionTitle}>Another teams interesting</h2>
                    {/* Equipo recomendado 1 */}
                    <div className={style.profileInfo}>
                        <img src={profile} alt="Profile" className={style.profileImage} />
                        <div className={style.profileDetails}>
                            <p className={style.profileName}>Groupname</p>
                            <p className={style.profileHandle}>Last activity 10 minutes ago</p>
                        </div>
                    </div>
                    <span className={style.showMore}>Show more...</span>
                </div>
            </div>
        </div>
    );
};

export default RightSection;
