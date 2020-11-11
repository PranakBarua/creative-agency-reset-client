import React, { useContext, useState } from 'react';
import firebaseConfig from './firebase.config';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    const [user,setUser]=useState({
        isSignedIn:false,
        name:'',
        email:'',
        img:''
    })

    const [loggedInUser,setLoggedInUser]=useContext(userContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            console.log(result)
            const {displayName,email,photoURL}=result.user;
            const newUser={
                isSignedIn:true,
                name:displayName,
                email:email,
                img:photoURL
            }
            setUser(newUser)
            setLoggedInUser(newUser)
            console.log(newUser)
            storeAuthToken();
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    const storeAuthToken=()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token',idToken)
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div>
             <div className="d-flex justify-content-center align-items-center">
                <div className="text-center">
                        <img className="mt-5" style={{height:'50px'}} src={logo} alt=""/>
                <div className="login-area text-center">
                    <h3 className="mt-5">Login With</h3>
                    <button className="loginButton " onClick={handleGoogleSignIn}>Continue With Google</button>
                </div> 
                </div>
            </div>
        </div>
    );
};

export default Login;