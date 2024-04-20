import React, { useState, useEffect } from "react";
import LeftSection from '../Sections/LeftSection/LeftSection';
import RightSection from '../Sections/RightSection/RightSection';
import { FaRegHeart, FaRegComment, FaShare, FaCloudUploadAlt, FaRegImage, FaTimes } from 'react-icons/fa';
import style from "./HomePage.module.css";
import signupSideImage from "../../assets/images/LoginImage.png";
import {user} from  "../Login/Login"
import { useMutation,useLazyQuery, gql } from "@apollo/client";

import profile from "../../assets/images/profile.png";

const postQuery =gql`query Posts {
    posts {
      title
      id
      content
      author{
        firstName
        lastName
        username
    }
    likes {
        id
      }
      creationDate
      comments {
        id
        content
      }
    }
  }`

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');
    const [newPostImageData, setNewPostImageData] = useState(null);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
  const [getPosts] = useLazyQuery(postQuery);
  

    const [showPostModal, setShowPostModal] = useState(false);
  
    useEffect( () => {

        async function fetchPosts() {
            try {
                const { data, error } = await getPosts();
                if (error) {
                    console.error("Error fetching posts:", error);
                    return;
                }
                setPosts(data.posts); // Assuming data.posts is the array you need
            } catch (err) {
                console.error("Fetching posts failed:", err);
            }
        }
        fetchPosts();

        const lastPost = localStorage.getItem('lastPost');
        if (lastPost) {
            const { text, imageData } = JSON.parse(lastPost);
            setNewPost(text);
            setNewPostImageData(imageData);
        }
    }, []);
    


    const handlePostSubmit = () => {
        if (newPost.trim() !== '' || newPostImageData) {
            const newPostData = {
                id: posts.length() + 1,
                title: '',
                content: '',
                image: newPostImageData,
                showCommentInput: false // estado para controlar el área de comentario
            };
            setPosts([newPostData, ...posts]); //new post al principio
            setNewPost('');
            setNewPostImageData(null);
            localStorage.setItem('lastPost', JSON.stringify({ text: newPost, imageData: newPostImageData }));
            setShowPostModal(false); // Cerrar la ventana emergente después de postear
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
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return { ...post, showCommentInput: !post.showCommentInput };
            }
            return post;
        });
        setPosts(updatedPosts);
    };

    const handleCommentSubmit = (postId) => {
        if (commentText.trim() !== '') {
            const updatedPosts = posts.map(post => {
                if (post.id === postId) {
                    return { ...post, comments: post.comments + 1, showCommentInput: false };
                }
                return post;
            });
            setPosts(updatedPosts);
            setComments([...comments, { postId, comment: commentText }]);
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
                const updatedComments = comments.filter(comment => comment.postId === postId);
                return { ...post, comments: post.comments - 1 };
            }
            return post;
        });
        setPosts(updatedPosts);
        setComments(comments.filter((_, index) => index !== commentIndex));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setNewPostImageData(reader.result);
        };
    };

    return (
        <div className={style.homePage}>
            <LeftSection />
            <div className={style.centerSection}>
                <h2>Welcome, {user ? ( user.firstName + ' '+ user.lastName) : 'usuario no encontrado'}</h2>
                <div className={style.PostButtonContainer}>
                    <textarea
                        className={style.postTextarea}
                        placeholder="What's on your mind?"
                        onClick={() => setShowPostModal(true)}
                        value={newPost}
                        onChange={(e) => setNewPost(e.target.value)}
                    />
                    <br />
                    <br />
                </div>

                <div className={style.publications}>
                    {posts.map((post, index) => (
                        <div key={post.id} className={style.publication}>
                            <div className={style.profileInfo}>
                                <img src={ `https://ui-avatars.com/api/?name=${post.author.firstName}+${post.author.lastName}`} alt="Profile" className={style.profileImage} />
                                <div className={style.profileDetails}>
                                    <p className={style.profileName}>{post.author.firstName} {post.author.lastName} ({user.rol.rolname})</p>
                                    <p className={style.profileHandle}>@{post.author.username}</p>
                                </div>
                                <span className={style.postTime}>{new Date(post.creationDate).getDay() ===new Date().getDay() ? 'Reciente': 'No es reciente'}</span>
                                <button className={style.deletePostButton} onClick={() => handleDeletePost(post.id)}>
                                    <FaTimes />
                                </button>
                            </div>
                            <p>{post.content}</p>
                            {post.image && <img src={`https://picsum.photos/200/300`} alt="Background" className={style.image} />}  
                            <div className={style.interactionButtons}>
                                <button className={style.interactionButton} onClick={() => handleLike(post.id)}>
                                    <FaRegHeart style={{ color: 'red' }} /> {post.likes.length}
                                </button>
                                <button className={style.interactionButton} onClick={() => handleComment(post.id)}>
                                    <FaRegComment /> {post.comments.length}
                                </button>
                                <button className={style.interactionButton} onClick={() => handleShare(post.id)}>
                                    <FaShare /> 0
                                </button>
                             </div>
                            {post.comments && (
                                <div className={style.commentInputContainer}>
                                    <textarea
                                        className={style.commentTextArea}
                                        placeholder="Escribe un comentario..."
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                    />
                                    <button className={style.interactionButton}><FaCloudUploadAlt /></button>
                                    <div className={style.commentButtonFlex}>
                                        <button className={style.commentButton} onClick={() => handleCommentSubmit(post.id)}>Enviar</button>
                                    </div>
                                </div>
                            )}
                            {post.comments.map((comment, commentIndex) => (
                                <div key={commentIndex} className={style.comment}>
                                    <p>{comment.content}</p>
                                    <button onClick={() => handleDeleteComment(post.id, commentIndex)}>
                                        <FaTimes className={style.iconclose} />
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
            {showPostModal && (
                <div className={style.postModal}>
                    <div className={style.modalContent}>
                        <span onClick={() => setShowPostModal(false)} className={style.close}>&times;</span>
                        <div className={style.PostButtonContainer}>
                            <textarea
                                className={style.postTextarea}
                                placeholder="What's on your mind?"
                                value={newPost}
                                onChange={(e) => setNewPost(e.target.value)}
                            />
                            <label htmlFor="imageUploadModal" className={style.uploadIcon}>
                                <FaRegImage />
                            </label>
                            <input
                                id="imageUploadModal"
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                style={{ display: "none" }}
                            />
                        </div>
                        <div className={style.postButtonContainer}>
                            <button className={style.postButton} onClick={handlePostSubmit}>
                                POSTEAR
                            </button>
                        </div>
                        {newPostImageData && (
                            <div className={style.imagePreview}>
                                <img src={newPostImageData} alt="Preview" />
                                <button onClick={() => setNewPostImageData(null)}>
                                    <FaTimes />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};

export default HomePage;