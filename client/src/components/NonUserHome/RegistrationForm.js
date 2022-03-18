import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import { StyledRegistrationForm } from "../Common/Form.style";
import { CloseButton } from "../Common/Close.style";
import { FormHeadingNoMargin } from "../Common/Heading.style";
import { Input, InputRegistration } from "../Common/Inputs.style";
import { BlueButtonRegistration } from "../Common/Button.style";
import { ErrorMessages } from "../Common/ErrorMessages.style";

const RegistrationForm = ({ 
    user,
    valid,
    setUser,
    setPasswordMatch, 
    handleChange,
    openSignUpForm 
}) => {

    const [refresh, setRefresh] = useState(false);
    const [focus, setFocus] = useState({
        username: false,
        email: false,
        password: false,
        passwordMatch: false
    });

    const handleRegistration = (event) => {
        event.preventDefault();

        const payload = {
            username: user.username,
            email: user.email,
            password: user.password
        };

        axios({
            url: '/user/saveUser',
            method: 'POST',
            data: payload
        })
        .then(() => {
            setUser({
                username: '',
                email: '',
                password: '',
            });

            setRefresh(true);
        }) 
        .catch((err) => {
            console.log("ERROR in NonUserHome - /saveUser", err);
        });
    };

    
    const handleFocus = ({ target }) => {
        const { name } = target;
        
        switch(name) {
            case "username":
                setFocus(prevState => ({
                    [name]: true,
                    email: prevState.email,
                    password: prevState.password,
                    passwordMatch: prevState.passwordMatch
                }));
                break;
            case "email":
                setFocus(prevState => ({
                    username: prevState.username,
                    [name]: true,
                    password: prevState.password,
                    passwordMatch: prevState.passwordMatch
                }));
                break;
            case "password":
                setFocus(prevState => ({
                    username: prevState.username, 
                    email: prevState.email,
                    [name]: true,
                    passwordMatch: prevState.passwordMatch
                }));
                break;
            case "passwordMatch":
                setFocus(prevState => ({
                    username: prevState.username, 
                    email: prevState.email,
                    password: prevState.password,
                    [name]: true
                }));
                break;
            default:
                break;
        }
    };

    const handleBlur = ({ target }) => {
        const { name } = target;
        
        switch(name) {
            case "username":
                setFocus(prevState => ({
                    [name]: false,
                    email: prevState.email,
                    password: prevState.password,
                    passwordMatch: prevState.passwordMatch
                }));
                break;
            case "email":
                setFocus(prevState => ({
                    username: prevState.username,
                    [name]: false,
                    password: prevState.password,
                    passwordMatch: prevState.passwordMatch
                }));
                break;
            case "password":
                setFocus(prevState => ({
                    username: prevState.username, 
                    email: prevState.email,
                    [name]: false,
                    passwordMatch: prevState.passwordMatch
                }));
                break;
            case "passwordMatch":
                setFocus(prevState => ({
                    username: prevState.username, 
                    email: prevState.email,
                    password: prevState.password,
                    [name]: false
                }));
                break;
            default:
                break;
        }
    };

    return (
        <StyledRegistrationForm 
        onSubmit={ (e) => { handleRegistration(e); openSignUpForm(); } }>
            <CloseButton onClick={ openSignUpForm }></CloseButton>
            <FormHeadingNoMargin>Sign Up</FormHeadingNoMargin>

            <InputRegistration 
                onChange={ handleChange } 
                onFocus={ (e) => handleFocus(e) }
                onBlur={ (e) => handleBlur(e) }
                name="username" 
                placeholder="Username">
            </InputRegistration>
            <ErrorMessages active={ focus.username && !valid.username ? true : false }>
                Must be 6 to 20 characters, starting with a letter.
            </ErrorMessages>

            <Input 
                onChange={ handleChange }
                onFocus={ (e) => handleFocus(e) }
                onBlur={ (e) => handleBlur(e) }
                name="email"
                placeholder="Email" 
                type='email'>
            </Input>
            <ErrorMessages active={ focus.email && !valid.email ? true : false }>
                Must be filled in - example@example.com
            </ErrorMessages>

            <Input 
                onChange={ handleChange } 
                onFocus={ (e) => handleFocus(e) }
                onBlur={ (e) => handleBlur(e) }
                name="password" 
                placeholder="Password" 
                type="password">
            </Input>
            <ErrorMessages active={ focus.password && !valid.password ? true : false }>
                Must be 8 to 20 characters and must have at least 1 captial letter, 1 number and 1 special character - !@#$%
            </ErrorMessages>

            <Input 
                onChange={ (e) => setPasswordMatch(e.target.value) }
                onFocus={ (e) => handleFocus(e) }
                onBlur={ (e) => handleBlur(e) }
                name="passwordMatch"
                placeholder="Confirm Password" 
                type="password">
            </Input>                                
            <ErrorMessages active={ focus.passwordMatch && !valid.passwordMatch ? true : false }>
                The password and confirm password inputs don't match!
            </ErrorMessages>

            <BlueButtonRegistration
                type='submit'>
                Create an Account
            </BlueButtonRegistration>

            { refresh ? <Navigate to='/'/> : null }

        </StyledRegistrationForm>
    );
}
 
export default RegistrationForm;