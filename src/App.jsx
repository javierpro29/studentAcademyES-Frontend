/* eslint-disable no-undef */
import { useState } from "react";

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import {AppRouter} from "./Router/AppRouter";
import {loadErrorMessages, loadDevMessages} from "@apollo/client/dev";
if (process.env.NODE_ENV !== "production") {
	// Adds messages only in a non-production environment
	loadDevMessages();
	loadErrorMessages();
}

function App() {
	return <AppRouter />;
}

export default App;
