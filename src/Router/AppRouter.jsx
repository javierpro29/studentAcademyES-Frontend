import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "../Components/Login/Login";
import LandingPage from '../Components/LandingPage/LandingPage';
import Register from '../Components/Register/Register';
import Home from '../Components/HomePage/HomePage';
import Profile from '../Components/ProfilePage/ProfilePage';
import ProfileGroup from '../Components/ProfileGroupPage/ProfileGroup';
import Colaboration from '../Components/ColaborationPage/ColaborationGroup';
import Forum from '../Components/ForumPage/ForumPage';
import Notification from '../Components/NotificationPage/NotificationPage';
import Messenger from '../Components/MessengerPage/MessengerPage';
import Message from '../Components/MessengerPage/MessagePage';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path='/*' element={<Navigate to="/"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/colaboration" element={<Colaboration/>}/>
            <Route path="/profilegroup" element={<ProfileGroup/>}/>
            <Route path="/forum" element={<Forum/>}/>
            <Route path="/notifications" element={<Notification/>}/>
            <Route path="/messenger" element={<Messenger/>}/>
            <Route path="/message" element={<Message/>}/>
        </Routes>
    )
}
