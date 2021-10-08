import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function Login() {
    
    // clientId is copied from Client ID of Google Developer Console/Google Cloud Platform
    const clientId = "731552653700-jb13kg3b71echnr124gebk1bf6uh6vkr.apps.googleusercontent.com";
    
    // using useState 
    const [loginButton, setLoginButton] = useState(true); // it's true bcoz initially login button needs to be shown.
    const [logoutButton, setLogoutButton] = useState(false); // opposite of the prev. one coz it's shown only after user's logged in.
      
    // defining the functions declared inside div tag
    const loginSuccess = (res) => {
        console.log("LogSuccess : ", res.profileObj); //here, profileObj gives basic details.
        
        // there's no point to show login and disable the logout button after the user's logged in successfully. 
        setLoginButton(false);
        setLogoutButton(true);
    }
    
    const failureSuccess = (res) => {
        console.log("Login Failed! : ", res);
    }
    
    const signoutSuccess = () => {
        alert("You've been signed out successfully.");
        setLoginButton(true);
        setLogoutButton(false);
        console.clear();
    }
    
    return (
        <div>
        {/* if the condition is true in the state then it'll display the respective buttons otherwise it'll display null */}
            { loginButton ?
                <GoogleLogin
                    clientId = {clientId}
                    buttonText = "Login"
                    onSuccess = {loginSuccess}
                    onFailure = {failureSuccess}
                    cookiePolicy = {'single_host_origin'}
                /> : null
            }
            { logoutButton ?
                <GoogleLogout
                    clientId = {clientId}
                    buttonText = "Logout"
                    onLogoutSuccess = {signoutSuccess}
                /> : null
            }
        </div>
    )
}
