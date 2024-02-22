import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "../Components/Login/Login";
import LandingPage from '../Components/LandingPage/LandingPage';
import Register from '../Components/Register/Register';
import Home from '../Components/HomePage/HomePage';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path='/*' element={<Navigate to="/"/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}