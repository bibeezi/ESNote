import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";

import { Header } from "../Common/Header.style";
import { Heading } from "../Common/Heading.style"
import { Content } from "../Common/Content.style";
import { Form } from "../Common/Form.style";
import { Modal } from "./Modal";
import { Button } from '../Common/Button.style';


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

    const openSignUpForm = () => {
        setShowRegistration(prev => !prev);
        setActive(prev => !prev);
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        
        switch(name) {
            case "username":
                setUser(prevState => ({
                    [name]: value,
                    email: prevState.email, 
                    password: prevState.password
                }));
                break;
            case "email":
                setUser(prevState => ({
                    username: prevState.username, 
                    [name]: value,
                    password: prevState.password
                }));
                break;
            case "password":
                setUser(prevState => ({
                    username: prevState.username, 
                    email: prevState.email, 
                    [name]: value
                }));
                break;
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
            setUser({
                username: '',
                email: '',
                password: '',
            });
            
            localStorage.setItem("userID", res.data);

            setUserPage(true);
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /getUser", error);
        });
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
                                name="username" 
                                onChange={ handleChange } 
                                placeholder="Username" 
                                required>
                                </input>

                                <input 
                                name="email"
                                type='email'
                                onChange={ handleChange } 
                                placeholder="Email" 
                                required>
                                </input>

                                <input 
                                name="password" 
                                onChange={ handleChange } 
                                placeholder="Password" 
                                type="password" 
                                required>
                                </input>

                                <input 
                                onChange={ handleChange } 
                                placeholder="Confirm Password" 
                                type="password" 
                                required>
                                </input>

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