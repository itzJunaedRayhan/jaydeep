import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import Header from '../Home/Header/Header';
import './Login.css'
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    const history  = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        isSignIn : false,
        name : '',
        email : ''
    })

    //  Google Login Handle
    const handleLogIn = () =>{
        firebase.auth().signInWithPopup(GoogleProvider)
        .then((result) => {
            const data = result.user;
            const {displayName, email} = result.user;
            var UserData = {
                isSignIn : true,
                name : displayName,
                email : email
            }
            setUser(UserData)
            setLoggedInUser(UserData)
            history.replace(from)
            setUserToken()
        })
        .catch((error)=>{
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage)
        })
    }

    const setUserToken = () =>{
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token',idToken)
          }).catch(function(error) {
          });
    }
    
    return (
        <div className="login">
            <Header/>
            <div class="login-form">
                <div className="form">                   
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="Password" placeholder="Password" />
                    <button onClick={handleLogIn} type="submit"><FontAwesomeIcon icon={faGoogle} /> Log In With Google</button>
                    <Link to="/createAccout">create an account</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;