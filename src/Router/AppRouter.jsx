import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "../Components/Login/Login";
import LandingPage from '../Components/LandingPage/LandingPage';
import Register from '../Components/Register/Register';
import Home from '../Components/HomePage/HomePage';
import Profile from '../Components/ProfilePage/ProfilePage';
import ProfileGroup from '../Components/ProfileGroupPage/ProfileGroup';
import Colaboration from '../Components/ColaborationPage/ColaborationGroup';
import Forum from '../Components/ForumPage/ForumPage';

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
        </Routes>
    )
}
