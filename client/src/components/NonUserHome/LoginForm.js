// React Hooks
import { useState } from 'react';

// Promise-based HTTP client
import axios from 'axios';

// URL Navigation
import { Navigate } from 'react-router-dom';

// Styled Components
import { StyledLoginForm } from "../Common/Form.style";
import { FormHeading, FormHeadingRegister } from "../Common/Heading.style";
import { OrangeButton, BlueButton } from "../Common/Button.style";
import { Input } from "../Common/Inputs.style";
import { ErrorMessages } from "../Common/Messages.style";

const LoginForm = ({ 
    // props passed from NonUserHome.js
    user, 
    validLogin, 
    setValidLogin, 
    handleChange, 
    openSignUpForm 
}) => {

    // Sends user to the User Home page when true
    const [userPage, setUserPage] = useState(false);
    
    // Handles submission of login form when
    // 'Login' button is clicked
    const handleLogin = (event) => {
        // Stops the form from refreshing the page on render
        event.preventDefault();

        // Gather data to send
        const payload = {
            username: user.username,
            email: user.email,
            password: user.password
        };

        // Finds the user in MongoDB
        axios.get('/user/getUser', {
            params: {
                data: payload
            }
        }).then((res) => {
            // The user is found
            if(res.data.msg !== "User Not Found") {
                // save the UserID and username to browser storage for later use
                localStorage.setItem("userID", res.data.userID);
                localStorage.setItem("username", res.data.username);

                // open the User Home page
                setUserPage(true);
            }

            // The user is not found so show the error message
            setValidLogin(false);
            
        }).catch((error) => {
            console.log("ERROR in LoginForm - /user/getUser", error);
        });
    };

    return (
        <StyledLoginForm onSubmit={ (e) => handleLogin(e) }>
            
            <FormHeading>Login</FormHeading>

            <Input 
                onChange={ handleChange }
                name="username" 
                placeholder="Username" 
                required>
            </Input>

            <Input
                onChange={ handleChange } 
                name="password" 
                placeholder="Password" 
                type="password" 
                required>
            </Input>
            { user.username !== "" && user.password !== "" && validLogin === false ?
                <ErrorMessages>
                    Username or Password is incorrect!
                </ErrorMessages>
            :
                null
            }

            <OrangeButton
                type='submit'>
                Login
            </OrangeButton>

            {/* Change the URL to open the User Home page */}
            { userPage ? <Navigate to='/user-home'/> : null }

            <hr></hr>

            <FormHeadingRegister>Register</FormHeadingRegister>

            <BlueButton
                type='button'
                onClick={ openSignUpForm }>
                Sign Up
            </BlueButton>

        </StyledLoginForm>
    );
}
 
export default LoginForm;