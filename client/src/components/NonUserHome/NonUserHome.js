import { useEffect, useState } from 'react';

import Images from "../../images/Images";
import Header from "./Header";
import Presentation from "./Presentation";
import LoginForm from "./LoginForm";
import RegistrationForm from './RegistrationForm';
import { NonUserHomeContent } from "../Common/Content.style";
import { LoginFormContainer, RegistrationFormContainer } from "../Common/Form.style";
import { Modal } from '../Common/Modal.style';

const NonUserHome = () => {

    const [showRegistration, setShowRegistration] = useState(false);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });
    const userRegex = /^[a-zA-Z0-9].{5,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
            username: prevState.username,
            email: prevState.email,
            password: prevState.password, 
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
                    username: result,
                    email: prevState.email,
                    password: prevState.password, 
                    passwordMatch: prevState.passwordMatch
                }));

                setValidLogin(null);
                break;
            }
            case "email": {

                userCopy.email = value;

                setUser(userCopy);

                const result = emailRegex.test(value);

                setValid(prevState => ({
                    username: prevState.username,
                    email: result,
                    password: prevState.password, 
                    passwordMatch: prevState.passwordMatch
                }));
                break;
            }
            case "password": {

                userCopy.password = value;

                setUser(userCopy);

                const result = passwordRegex.test(value);

                setValid(prevState => ({
                    username: prevState.username,
                    email: prevState.email,
                    password: result, 
                    passwordMatch: prevState.passwordMatch
                }));

                setValidLogin(null);
                break;
            }
            default:
                break;
        }
    };

    return ( 
        <div>
            <Header homeImage={ Images.Home } />

            <NonUserHomeContent>
                <Presentation presentationImage={ Images.Presentation } />

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

            { showRegistration && 
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