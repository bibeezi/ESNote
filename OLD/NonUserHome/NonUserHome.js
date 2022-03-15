import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Images from "../../../images/Images";

import { Header } from "../Common/Header.style";
import { Heading } from "../Common/Heading.style"
import { Content } from "../Common/Content.style";
import { Form } from "../Common/Form.style";
import { Modal } from "./Modal";
import { Button } from '../Common/Button.style';
import { ErrorMessages } from './ErrorMessages.style';


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
            <Header>
                <div>
                    <img 
                        src={ Images.Home } 
                        alt="Home Icon">
                    </img>
                    <Heading>ESNote</Heading>
                </div>
            </Header>

            <Content>
                <div id="presentation">
                    <img 
                        src={ Images.Presentation } 
                        alt='Effective Study Notebook Explanation Presentation'>
                    </img>
                </div>

                <div className="form">
                    <Form 
                    onSubmit={ (e) => handleLogin(e)}>
                        <h1>Login</h1>

                        <input 
                            onChange={ handleChange }
                            name="username" 
                            placeholder="Username" 
                            required>
                            
                        </input>

                        <input
                            onChange={ handleChange } 
                            name="password" 
                            placeholder="Password" 
                            type="password" 
                            required>
                        </input>
                        <ErrorMessages active={ user.username !== "" && user.password !== "" && validLogin === false ? true : false }>
                            Username or Password is incorrect!
                        </ErrorMessages>

                        <Button
                            type='submit'
                            colours={ "orange" }>
                            Login
                        </Button>

                        { userPage ? <Navigate to='/user'/> : null }

                        <hr></hr>

                        <h1>Register</h1>

                        <Button
                            type='button'
                            onClick={ openSignUpForm }
                            colours={ "blue" }>
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </Content>

            {
                showRegistration && 
                <div className='form'>
                    <Modal>
                        <Form 
                            onSubmit={ (e) => { handleRegsitration(e); openSignUpForm(); } } 
                            active={ active }>
                                <div 
                                    className='close' 
                                    onClick={ openSignUpForm }>
                                </div>

                                <h1>Sign Up</h1>

                                <input 
                                    onChange={ handleChange } 
                                    onFocus={ (e) => handleFocus(e) }
                                    onBlur={ (e) => handleBlur(e) }
                                    name="username" 
                                    placeholder="Username">
                                </input>
                                <ErrorMessages active={focus.username && !valid.username ? true : false}>
                                    Must be 6 to 20 characters and must start with a letter.
                                </ErrorMessages>

                                <input 
                                    onChange={ handleChange }
                                    onFocus={ (e) => handleFocus(e) }
                                    onBlur={ (e) => handleBlur(e) }
                                    name="email"
                                    placeholder="Email" 
                                    type='email'>
                                </input>
                                <ErrorMessages active={focus.email && !valid.email ? true : false}>
                                    Must be filled in - example@example.com
                                </ErrorMessages>

                                <input 
                                    onChange={ handleChange } 
                                    onFocus={ (e) => handleFocus(e) }
                                    onBlur={ (e) => handleBlur(e) }
                                    name="password" 
                                    placeholder="Password" 
                                    type="password">
                                </input>
                                <ErrorMessages active={ focus.password && !valid.password ? true : false}>
                                    Must be 8 to 20 characters and must have a captial letter, a number and a special character - !@#$%
                                </ErrorMessages>

                                <input 
                                    onChange={ (e) => setPasswordMatch(e.target.value) }
                                    onFocus={ (e) => handleFocus(e) }
                                    onBlur={ (e) => handleBlur(e) }
                                    name="passwordMatch"
                                    placeholder="Confirm Password" 
                                    type="password">
                                </input>                                
                                <ErrorMessages active={ focus.passwordMatch && !valid.passwordMatch ? true : false}>
                                    The password and confirm password inputs don't match!
                                </ErrorMessages>

                                <Button
                                    type='submit'
                                    active={ active }
                                    colours={ "blue" }>
                                    Create an Account
                                </Button>

                                { refresh ? <Navigate to='/'/> : null }
                        </Form>
                    </Modal>
                </div>
            }
        </div>
    );
}
 
export default NonUserHome;