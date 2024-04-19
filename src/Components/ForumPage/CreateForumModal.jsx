import React, { useState } from 'react';
import style from './CreateForumModal.module.css';

const CreateForumModal = ({ show, onClose, onCreateForum }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && imageFile) {
            const newForumId = Date.now().toString();
            const newForum = {
                id: newForumId,
                title,
                description,
                imageUrl: URL.createObjectURL(imageFile),
                lastActivity: 'Recién creado'
            };
            onCreateForum(newForum);
            setTitle('');
            setDescription('');
            setImageFile(null);
            setImagePreview('');
            onClose(); // Cerrar el modal después de crear el foro
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImagePreview(URL.createObjectURL(file));
        } else {
            setImageFile(null);
            setImagePreview('');
        }
    };

    return (
        <>
            {show && (
                <div className={style.modalOverlay}>
                    <div className={style.modalContainer}>
                        <div className={style.modalHeader}>
                            <h2>Crear Nuevo Foro</h2>
                            <button className={style.closeButton} onClick={onClose}>
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={style.modalBody}>
                                <div className={style.formGroup}>
                                    <label htmlFor="title">Título</label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={style.formGroup}>
                                    <label htmlFor="description">Descripción</label>
                                    <textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className={style.formGroup}>
                                    <label htmlFor="imageFile">Imagen de Portada</label>
                                    <input
                                        type="file"
                                        id="imageFile"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        required
                                    />
                                    {imagePreview && (
                                        <img
                                            src={imagePreview}
                                            alt="Imagen de Portada"
                                            className={style.imagePreview}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className={style.modalFooter}>
                                <button type="submit" className={style.createButton}>
                                    Crear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default CreateForumModal;
