// React Hooks
import { useState } from 'react';
// Image files
import Images from "../../images/Images";
// Child Components
import Header from "./Header";
import LoginForm from "./LoginForm";
import RegistrationForm from './RegistrationForm';
// Styled Components
import { NonUserHomeContent } from "../Common/Content.style";
import { StyledPresentation } from "./Presentation.style";
import { LoginFormContainer, RegistrationFormContainer } from "../Common/Form.style";
import { Modal } from '../Common/Modal.style';

const NonUserHome = () => {

    const [showRegistrationForm, setShowRegistrationForm] = useState(false);

    // Holds user input from login or registration forms
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Status of valid inputs from registration form
    const [valid, setValid] = useState({
        username: false,
        email: false,
        password: false,
        passwordMatch: false
    });

    // Displays error message when login form is invalid
    const [validLogin, setValidLogin] = useState(true);

    // Regular Expressions to test against inputs during login and registration
    const userRegex = /^[a-zA-Z0-9].{5,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;
    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;


    // Opens registration form
    const openSignUpForm = (event) => {
        // Stops the form from refreshing the page on render
        event.preventDefault();

        setShowRegistrationForm(prevState => !prevState);
    };

    // Handles input change for registration and login forms
    const handleChange = ({ target }) => {
        // Get the name and value attribute from 
        // the element that triggered the event
        const { name, value } = target;
        
        // Set user state to be used for server requests.
        // Validate input values and set valid state for
        // error messages or form submission
        switch(name) {
            case "username": {
                const result = userRegex.test(value);

                setUser(prevState => ({
                    ...prevState, 
                    username: value
                }));
                setValid(prevState => ({
                    ...prevState,
                    username: result
                }));
                break;

            }
            case "email": {
                const result = emailRegex.test(value);

                setUser(prevState => ({
                    ...prevState, 
                    email: value
                }));
                setValid(prevState => ({
                    ...prevState,
                    email: result
                }));
                break;

            }
            case "password": {
                const result = passwordRegex.test(value);

                setUser(prevState => ({
                    ...prevState, 
                    password: value
                }));
                setValid(prevState => ({
                    ...prevState,
                    password: result
                }));
                break;

            }
            case "passwordMatch": {
                const result = user.password === value && value !== "";

                setValid(prevState => ({
                    ...prevState, 
                    passwordMatch: result
                }));
                break;
                
            }
            default:
                break;
        }

        // Ensure true to hide error message for login
        setValidLogin(true);
    };

    return ( 
        <div>
            <Header homeImage={ Images.Home } />

            <NonUserHomeContent>
                <StyledPresentation>
                    <img 
                        src={ Images.Presentation } 
                        alt="Effective Study Notebook Presentation">
                    </img>
                </StyledPresentation>

                <LoginFormContainer>
                    
                    <LoginForm
                        user={ user }
                        validLogin={ validLogin }
                        setValidLogin={ setValidLogin }
                        handleChange={ handleChange }
                        openSignUpForm={ openSignUpForm }>
                    </LoginForm>

                </LoginFormContainer>
            </NonUserHomeContent>

            {/* show the Registration Form when true */}
            {   showRegistrationForm 
            && 
                <Modal onClick={ (e) => openSignUpForm(e) }>
                    <RegistrationFormContainer onClick={ (e) => openSignUpForm(e) }>
                        
                        <RegistrationForm
                            user={ user }
                            valid={ valid }
                            handleChange={ handleChange }
                            openSignUpForm={ openSignUpForm }>
                        </RegistrationForm>

                    </RegistrationFormContainer>
                </Modal> }
        </div>
    );
}
 
export default NonUserHome;