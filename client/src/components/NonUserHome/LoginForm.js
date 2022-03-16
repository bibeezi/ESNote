import { Navigate } from 'react-router-dom';

import { StyledLoginForm } from "../Common/Form.style";
import { FormHeading, FormHeadingRegister } from "../Common/Heading.style";
import { OrangeButton, BlueButton } from "../Common/Button.style";
import { LoginInput } from "../Common/Inputs.style";
import { ErrorMessages } from "../Common/ErrorMessages.style";

const LoginForm = ({ user, userPage, validLogin, handleLogin, handleChange, openSignUpForm }) => {
    return (
        <StyledLoginForm 
        onSubmit={ (e) => handleLogin(e) }>
            
            <FormHeading>Login</FormHeading>

            <LoginInput 
                onChange={ handleChange }
                name="username" 
                placeholder="Username" 
                required>
            </LoginInput>

            <LoginInput
                onChange={ handleChange } 
                name="password" 
                placeholder="Password" 
                type="password" 
                required>
            </LoginInput>
            <ErrorMessages active={ user.username !== "" && user.password !== "" && validLogin === false ? true : false }>
                Username or Password is incorrect!
            </ErrorMessages>

            <OrangeButton
                type='submit'>
                Login
            </OrangeButton>

            { userPage ? <Navigate to='/user'/> : null }

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