import React, { useState } from 'react';
import style from './CreateForumModal.module.css';

const CreateForumModal = ({ show, onClose, onCreateForum }) => { // Corrección en la prop onCreateForum
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newForumId = Date.now().toString();

        const newForum = {
            id: newForumId,
            title,
            description,
            imageUrl,
            lastActivity: 'Just created'
        };

        onCreateForum(newForum); // Corrección en la invocación de la función

        setTitle('');
        setDescription('');
        setImageUrl('');
    };

    return (
        <>
            {show && (
                <div className={style.modalOverlay}>
                    <div className={style.modalContainer}>
                        <div className={style.modalHeader}>
                            <h2>Create New Forum</h2>
                            <button className={style.closeButton} onClick={onClose}>
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={style.modalBody}>
                                <div className={style.formGroup}>
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className={style.formGroup}>
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className={style.formGroup}>
                                    <label htmlFor="imageUrl">Image URL</label>
                                    <input
                                        type="text"
                                        id="imageUrl"
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={style.modalFooter}>
                                <button type="submit" className={style.createButton}>
                                    Create Forum
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
