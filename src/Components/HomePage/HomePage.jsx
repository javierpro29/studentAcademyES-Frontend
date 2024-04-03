// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import LeftSection from '../Sections/LeftSection/LeftSection';
import RightSection from '../Sections/RightSection/RightSection';
import { RiFileGifLine } from 'react-icons/ri';
import { FaRegCalendarAlt, FaRegHeart, FaRegComment, FaShare, FaCloudUploadAlt, FaRegImage, FaPoll, FaCalendarAlt, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';
import style from "./HomePage.module.css";
import signupSideImage from "../../assets/images/LoginImage.png";
import profile from "../../assets/images/profile.png";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [newPostImage, setNewPostImage] = useState(null);
    const [comments, setComments] = useState([]);
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        const fetchedPosts = [
            {
                id: 1,
                author: 'Dariel Restituyo',
                handle: '@restituyo',
                time: '1 hour ago',
                image: signupSideImage,
                text: 'Esto es un simple post.',
                likes: 10,
                comments: 5,
                shares: 3
            }
        ];
        setPosts(fetchedPosts);
    }, []);

    const handlePostSubmit = () => {
        if (newPost.trim() !== '' || newPostImage) {
            const newPostData = {
                id: posts.length + 1,
                author: 'Dariel Restituyo',
                handle: '@restituyo',
                time: 'Just now',
                text: newPost,
                image: newPostImage,
                likes: 0,
                comments: 0,
                shares: 0
            };
            setPosts([...posts, newPostData]);
            setNewPost('');
            setNewPostImage(null);
        }
    };

    const handleLike = (postId) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, likes: post.likes + 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const handleComment = (postId) => {
        setShowCommentInput(true);
    };

    const handleCommentSubmit = (postId) => {
        if (commentText.trim() !== '') {
            const updatedPosts = posts.map(post => {
                if (post.id === postId) {
                    return { ...post, comments: post.comments + 1 };
                }
                return post;
            });
            setPosts(updatedPosts);
            setComments([...comments, { postId, comment: commentText }]);
            setShowCommentInput(false);
            setCommentText('');
        }
    };

    const handleShare = (postId) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, shares: post.shares + 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const handleDeletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
    };

    const handleDeleteComment = (postId, commentIndex) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                const updatedComments = comments.filter((_, index) => index !== commentIndex);
                return { ...post, comments: post.comments - 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
        setComments(comments.filter((_, index) => index !== commentIndex));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setNewPostImage(file);
    };

    return (
        <div className={style.homePage}>
            <LeftSection />
            <div className={style.centerSection}>
                <h2>Welcome, Dariel Restituyo</h2>
                <div className={style.topSection}>
                    <img src={profile} alt="Profile" className={style.topprofileImage} />
                    <input
                        type="text"
                        className={style.postInput}
                        placeholder="What's on your mind?"
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                    />
                    <button className={style.postButton} onClick={handlePostSubmit}>
                        POSTEAR
                    </button>
                    {newPostImage && (
                        <div className={style.imagePreview}>
                            <img src={URL.createObjectURL(newPostImage)} alt="Preview" />
                            <button onClick={() => setNewPostImage(null)}>
                                <FaTimes />
                            </button>
                        </div>
                    )}
                </div>
                <div className={style.postIcons}>
                    <label htmlFor="imageUpload" className={style.iconButton}>
                        <FaRegImage />
                        <input
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                        />
                    </label>
                    <button className={style.iconButton}><RiFileGifLine /></button>
                    <button className={style.iconButton}><FaPoll /></button>
                    <button className={style.iconButton}><FaCalendarAlt /></button>
                    <button className={style.iconButton}><FaMapMarkerAlt /></button>
                </div>
                <span className={style.events}><FaRegCalendarAlt className={style.eventsIcon} /> Events</span>
                <div className={style.buttonsRow}>
                    <button className={style.currentButton}>Following</button>
                    <button className={style.completedButton}>For you</button>
                </div>
                <div className={style.publications}>
                    {posts.map((post, index) => (
                        <div key={post.id} className={style.publication}>
                            <div className={style.profileInfo}>
                                <img src={profile} alt="Profile" className={style.profileImage} />
                                <div className={style.profileDetails}>
                                    <p className={style.profileName}>{post.author}</p>
                                    <p className={style.profileHandle}>{post.handle}</p>
                                </div>
                                <span className={style.postTime}>{post.time}</span>
                                <button className={style.deletePostButton} onClick={() => handleDeletePost(post.id)}>
                                    <FaTimes />
                                </button>
                            </div>
                            {post.image && <img src={post.image} alt="Background" className={style.image} />}
                            <p>{post.text}</p>
                            <div className={style.interactionButtons}>
                                <button className={style.interactionButton} onClick={() => handleLike(post.id)}>
                                    <FaRegHeart /> {post.likes}
                                </button>
                                <button className={style.interactionButton} onClick={() => handleComment(post.id)}>
                                    <FaRegComment /> {post.comments}
                                </button>
                                <button className={style.interactionButton} onClick={() => handleShare(post.id)}>
                                    <FaShare /> {post.shares}
                                </button>
                                <button className={style.interactionButton}><FaCloudUploadAlt /></button>
                            </div>
                            {showCommentInput && (
                                <div className={style.commentInputContainer}>
                                    <input
                                        type="text"
                                        className={style.commentInput}
                                        placeholder="Escribe un comentario..."
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleCommentSubmit(post.id);
                                            }
                                        }}
                                    />
                                    <button className={style.commentButton} onClick={() => handleCommentSubmit(post.id)}>Enviar</button>
                                </div>
                            )}
                            {comments.filter(comment => comment.postId === post.id).map((comment, commentIndex) => (
                                <div key={commentIndex} className={style.comment}>
                                    <p>{comment.comment}</p>
                                    <button onClick={() => handleDeleteComment(post.id, commentIndex)}>
                                        <FaTimes />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <hr className={style.sectionSeparator} />
                <hr className={style.sectionSeparator} />
            </div>
            <RightSection />
        </div>
    );
};

export default HomePage;
