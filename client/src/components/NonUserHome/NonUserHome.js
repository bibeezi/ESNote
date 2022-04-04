import { useEffect, useState } from 'react';

import Images from "../../images/Images";
import Header from "./Header";
import LoginForm from "./LoginForm";
import RegistrationForm from './RegistrationForm';
import { NonUserHomeContent } from "../Common/Content.style";
import { StyledPresentation } from "./Presentation.style";
import { LoginFormContainer, RegistrationFormContainer } from "../Common/Form.style";
import { Modal } from '../Common/Modal.style';

const NonUserHome = () => {

    const userRegex = /^[a-zA-Z0-9].{5,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [showRegistration, setShowRegistration] = useState(false);

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [passwordMatch, setPasswordMatch] = useState('');

    const [valid, setValid] = useState({
        username: false,
        email: false,
        password: false,
        passwordMatch: false
    });
    const [validLogin, setValidLogin] = useState(null);


    useEffect(() => {

        const match = user.password === passwordMatch && passwordMatch !== "" ? true : false;

        setValid(prevState => ({
            ...prevState, 
            passwordMatch: match
        }));

    }, [user.password, passwordMatch]);


    const openSignUpForm = (event) => {
        
        event.preventDefault();

        setShowRegistration(prev => !prev);
        
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;

        var userCopy = user;
        
        switch(name) {
            case "username": {

                userCopy.username = value;

                setUser(userCopy);

                const result = userRegex.test(value);

                setValid(prevState => ({
                    ...prevState,
                    username: result
                }));

                setValidLogin(null);
                break;
            }
            case "email": {

                userCopy.email = value;

                setUser(userCopy);

                const result = emailRegex.test(value);

                setValid(prevState => ({
                    ...prevState,
                    email: result
                }));
                break;
            }
            case "password": {

                userCopy.password = value;

                setUser(userCopy);

                const result = passwordRegex.test(value);

                setValid(prevState => ({
                    ...prevState,
                    password: result
                }));

                setValidLogin(null);
                break;
            }
            default:
                break;
        }
    };

    console.log(user);

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
                        setUser={ setUser }
                        setValidLogin={ setValidLogin }
                        handleChange={ handleChange }
                        openSignUpForm={ openSignUpForm }>
                    </LoginForm>

                </LoginFormContainer>
            </NonUserHomeContent>

            {   showRegistration 
            && 
                <Modal onClick={ (e) => openSignUpForm(e) }>
                    <RegistrationFormContainer onClick={ (e) => openSignUpForm(e) }>
                        
                        <RegistrationForm
                            user={ user }
                            valid={ valid }
                            setPasswordMatch={ setPasswordMatch }
                            handleChange={ handleChange }
                            openSignUpForm={ openSignUpForm }>
                        </RegistrationForm>

                    </RegistrationFormContainer>
                </Modal> }
        </div>
    );
}
 
export default NonUserHome;