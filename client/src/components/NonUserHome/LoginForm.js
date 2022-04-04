import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import { StyledLoginForm } from "../Common/Form.style";
import { FormHeading, FormHeadingRegister } from "../Common/Heading.style";
import { OrangeButton, BlueButton } from "../Common/Button.style";
import { Input } from "../Common/Inputs.style";
import { ErrorMessages } from "../Common/Messages.style";

const LoginForm = ({ 
    user, 
    validLogin, 
    setUser,
    setValidLogin, 
    handleChange, 
    openSignUpForm 
}) => {

    const [userPage, setUserPage] = useState(false);
    
    const handleLogin = (event) => {
        event.preventDefault();

        const payload = {
            username: user.username,
            email: user.email,
            password: user.password
        };

        axios.get('/user/getUser', {
            params: {
                data: payload
            }
        }).then((res) => {
            if(res.data.msg !== "User Not Found") {
                setUser({
                    username: '',
                    email: '',
                    password: '',
                });

                localStorage.setItem("userID", res.data.userID);
                localStorage.setItem("username", res.data.username);

                setUserPage(true);  
            }

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
            <ErrorMessages 
                active={ user.username !== "" && user.password !== "" && validLogin === false }>
                Username or Password is incorrect!
            </ErrorMessages>

            <OrangeButton
                type='submit'>
                Login
            </OrangeButton>

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