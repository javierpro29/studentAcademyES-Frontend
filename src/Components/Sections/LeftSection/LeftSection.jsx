import React, { useState } from "react";
import { useLocation,useNavigate } from 'react-router-dom'; // Importa useHistory de React Router
import { RiHomeLine,RiHomeFill, RiUserSharedLine,RiUserSharedFill, RiMessengerLine,RiMessengerFill, RiUserLine, RiSettings5Fill, RiNotification3Line,RiNotification3Fill, RiDiscussLine,RiDiscussFill, RiLogoutBoxLine, RiAddCircleLine, RiEdit2Line, RiUserFill, RiAlertLine, RiAlertFill } from 'react-icons/ri';
import { TfiHelp, TfiHelpAlt } from "react-icons/tfi";
import style from "./LeftSection.module.css";
import profile from "../../../assets/images/profile.png";
import logoImg from "../../../assets/images/Logo2.png"
import {user} from  "../../Login/Login"

const LeftSection = () => {

    const location = useLocation();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navigate = useNavigate();

    const handleNavigation = (route) => {
        navigate(route); // Redirige a la ruta especificada
    };
  return (
    <div>
      <div className={style.leftSection}>
                <h1><img src={logoImg} alt="Logo" className={style.logo} />StudentAcademy</h1>
                <div className={style.navButtons}>
                    <div className={style.navButton} onClick={() => handleNavigation('/home')}>{location.pathname === "/home" ? <RiHomeFill /> : <RiHomeLine />}Home</div>
                    <div className={style.navButton} onClick={() => handleNavigation('/colaboration')}>{location.pathname === "/colaboration" ? <RiUserSharedFill /> : <RiUserSharedLine />}Colaboration Groups</div>
                    <div className={style.navButton} onClick={() => handleNavigation('/forum')}>{location.pathname === "/forum" ? <RiDiscussFill /> : <RiDiscussLine />}Forums</div>
                    <div className={style.navButton} onClick={() => handleNavigation('/messenger')}>{location.pathname === "/messenger" ? <RiMessengerFill /> : <RiMessengerLine />}Messenger</div>
                    <div className={style.navButton} onClick={() => handleNavigation('/notifications')}>{location.pathname === "/notifications" ? <RiNotification3Fill /> : <RiNotification3Line />}Notifications</div>
                    <div className={style.navButton} onClick={() => handleNavigation('/privacityandsecurity')}>{location.pathname === "/home" ? <RiAlertFill /> : <RiAlertLine />} Privacy & Security</div>
                    <div className={style.navButton} onClick={() => handleNavigation('/profile')}>{location.pathname === "/profile" ? <RiUserFill /> : <RiUserLine />} Profile</div>
                    <div className={style.navButton} onClick={() => handleNavigation('/help')}>{location.pathname === "/help" ? <TfiHelp /> : <TfiHelpAlt />}Help</div>
                </div>
                <div className={style.profileInfo} onClick={toggleMenu}>
                    <img src={ `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`} alt="Profile" />
                    <div>
                        <p className={style.profileName}>{user ? ( user.firstName + ' '+ user.lastName + ' '+ '('+ user.rol.rolname + ')') : 'usuario no encontrado'}</p>
                        <p className={style.profileHandle}>@{user ? ( user.username ) : 'nombre de usuario no encontrado'}</p>
                    </div>
                    <RiSettings5Fill className={style.settingsIcon} />
                    {menuOpen && (
                        <div className={style.profileMenu}>
                            <button onClick={() => handleNavigation('/login')}><RiAddCircleLine className={style.iconMenu} />Add Existent Account</button>
                            <button onClick={() => handleNavigation('/profile')}><RiEdit2Line className={style.iconMenu} />Edit Profile</button>
                            <button onClick={() => handleNavigation('/register')}><RiLogoutBoxLine className={style.iconMenu} />Logout Account</button>
                        </div>
                    )}
                </div>
            </div>
    </div>
  );
};

export default LeftSection;