import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import LeftSection from '../Sections/LeftSection/LeftSection';
import ForumSection from '../Sections/ForumSection/ForumSection';
import { RiArrowLeftLine } from 'react-icons/ri';
import CreatePostModal from "./CreateForumModal"; // Corrección en la importación
import style from "./ForumPage.module.css";

const ForumPage = () => {
    const navigate = useNavigate();
    const { forumId } = useParams();
    const [forum, setForum] = useState(null);
    const [posts, setPosts] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const storedForums = JSON.parse(localStorage.getItem('myForums')) || [];
        const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
        const currentForum = storedForums.find((forum) => forum.id === forumId);
        const forumPosts = storedPosts.filter((post) => post.forumId === forumId);
        setForum(currentForum);
        setPosts(forumPosts);
    }, [forumId]);

    const handleGoBack = () => {
        navigate(-1);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleCreatePost = (newPost) => {
        const updatedPosts = [...posts, { ...newPost, forumId }];
        setPosts(updatedPosts);
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        toggleModal();
    };

    return (
        <div className={style.homePage}>
            <LeftSection />
            <div className={style.centerSection}>
                <div className={style.goBackButton} onClick={handleGoBack}>
                    <h2><RiArrowLeftLine className={style.gobackicon} />Forums</h2>
                </div>

                {forum && (
                    <div className={style.topSection}>
                        <img src={forum.imageUrl} alt="Forum" className={style.topImage} />
                        <div>
                            <h2 className={style.title}>{forum.title}</h2>
                            <h3 className={style.subtitle}>{forum.description}</h3>
                        </div>
                    </div>
                )}

                <div className={style.response}>
                    <button className={style.responsebutton} onClick={toggleModal}>Response</button>
                    <CreatePostModal show={showModal} onClose={toggleModal} forumId={forumId} onCreatePost={handleCreatePost} /> {/* Corrección en la importación */}
                </div>

                <div className={style.publications}>
                    {posts.map((post) => (
                        <div key={post.id} className={style.publication}>
                            <div className={style.messageContainer}>
                                <div className={style.profileInfo}>
                                    <img src={post.userImageUrl} alt="Profile" className={style.profileImage} />
                                </div>
                                <div className={style.messageBox}>
                                    <div className={style.messageTriangle} />
                                    <h3 className={style.messageTitle}>{post.title}</h3>
                                    <p className={style.messageContent}>{post.content}</p>
                                    <span className={style.postTime}>Reply</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className={style.sectionSeparator} />
                <hr className={style.sectionSeparator} />
            </div>
            <ForumSection />
        </div>
    );
};

export default ForumPage;
