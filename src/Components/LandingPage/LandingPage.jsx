import React, { useState } from "react";
//import { Link } from "react-router-dom/cjs/react-router-dom";
//import { env } from "../../config.js";
import style from "./LandinPage.module.css";
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';

const LandingPage = () => {
   const [count, setCount] = useState(0)
    return (
       <div className={style.landing}>
          <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
       </div>
    );
 };
 
 export default LandingPage;
 