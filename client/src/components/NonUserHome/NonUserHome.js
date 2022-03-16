import { useEffect, useState } from 'react';
import axios from 'axios';

import Images from "../../images/Images";
import Header from "./Header";
import Presentation from "./Presentation";
import { NonUserHomeContent } from "../Common/Content.style";
import { LoginFormContainer, RegistrationFormContainer } from "../Common/FormContainer.style";
import LoginForm from "./LoginForm";
import RegistrationForm from './RegistrationForm';
import { RegistrationModal } from '../Common/Modal.style';

const NonUserHome = () => {

    const [showRegistration, setShowRegistration] = useState(false);
    const [active, setActive] = useState(false);
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [userPage, setUserPage] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const userRegex = /^[a-zA-Z][a-zA-Z0-9-_].{6,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,20}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [passwordMatch, setPasswordMatch] = useState('');
    const [valid, setValid] = useState({
        username: false,
        email: false,
        password: false,
        passwordMatch: false
    });
    const [focus, setFocus] = useState({
        username: false,
        email: false,
        password: false,
        passwordMatch: false
    });

    const [validLogin, setValidLogin] = useState(null);


    useEffect(() => {
        const match = user.password === passwordMatch && passwordMatch != "" ? true : false;

        setValid(prevState => ({
            username: prevState.username,
            password: prevState.password, 
            passwordMatch: match
        }));
    }, [user.password, passwordMatch]);

    const openSignUpForm = () => {
        setShowRegistration(prev => !prev);
        setActive(prev => !prev);
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        
        switch(name) {
            case "username": {
                setUser(prevState => ({
                    [name]: value,
                    email: prevState.email, 
                    password: prevState.password
                }));

                const result = userRegex.test(value);

                setValid(prevState => ({
                    username: result,
                    password: prevState.password, 
                    passwordMatch: prevState.passwordMatch
                }));

                setValidLogin(null);
                break;
            }
            case "email": {
                setUser(prevState => ({
                    username: prevState.username, 
                    [name]: value,
                    password: prevState.password
                }));

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
                setUser(prevState => ({
                    username: prevState.username, 
                    email: prevState.email, 
                    [name]: value
                }));

                const result = passwordRegex.test(user.password);
        
                setValid(prevState => ({
                    username: prevState.username,
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

    const handleRegsitration = (event) => {
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
        })
        .then((res) => {

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
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /getUser", error);
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
        <div>
            <Header page="NonUserHome" homeImage={ Images.Home } />

            <NonUserHomeContent page="NonUserHome">
                <Presentation presentationImage={ Images.Presentation } />
                <LoginFormContainer>
                    <LoginForm
                        validLogin={ validLogin }
                        user={ user }
                        handleLogin={ handleLogin }
                        handleChange={ handleChange }
                        openSignUpForm={ openSignUpForm }>
                    </LoginForm>
                </LoginFormContainer>
            </NonUserHomeContent>

            { showRegistration && 
            <RegistrationModal>
                <RegistrationFormContainer>
                    <RegistrationForm
                        openSignUpForm={ openSignUpForm }>
                    </RegistrationForm>
                </RegistrationFormContainer>
            </RegistrationModal> }
        </div>
    );
}
 
export default NonUserHome;