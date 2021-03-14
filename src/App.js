import logo from './logo.svg';
import './App.css';
import styles from './Styles.module.css'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom"
import { Component } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Login from "./components/Login/Login.js"
import Register from "./components/Register/Register.js"
import Home from "./components/Home/Home.js"
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"
import Nosotros from "./components/Nosotros/Nosotros.js"
import Mision from "./components/Mision/Mision.js"
import Vision from "./components/Vision/Vision.js"

const App = () => {
    const clases = styles
    return (
	    <Router>
	    	<Switch>
                <Route exact path="/">
	                <div className={clases.container}>
                        <Login />
                        <Footer />
	                </div>
                </Route>
                <Route path="/register">
                    <div className={clases.container}>
                        <Register />
                        <Footer />
                    </div>
                </Route>
                <Route path="/home">
                    <ToastContainer position="bottom-right"></ToastContainer>
                    <Home />
                </Route>
                <Route path="/nosotros">
                    <div className={clases.container}>
                        <Header />
                        <Nosotros />
                        <Footer />
                    </div>
                </Route>
                <Route path="/mision">
                    <div className={clases.container}>
                        <Header />
                        <Mision />
                        <Footer />
                    </div>
                </Route>
                <Route path="/vision">
                    <div className={clases.container}>
                        <Header />
                        <Vision />
                        <Footer />
                    </div>
                </Route>
	    	</Switch>
	    </Router>
    )
}

export default App;
