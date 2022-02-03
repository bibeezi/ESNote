import { useState } from 'react';
import axios from 'axios';

import Images from "../../images/Images";

import { Header } from "../Common/Header.style";
import { Content } from "../Common/Content.style";
import { Form } from "../Common/Form.style";
import { Registration } from "./Registration.style";
import { Button } from '../Common/Button.style';


const NonUserHome = () => {

    const [showRegistration, setShowRegistration] = useState(false);
    const [active, setActive] = useState(false);
    const [register, setRegister] = useState({
        username: '',
        email: '',
        password: '',
    });

    const openSignUpForm = () => {
        setShowRegistration(prev => !prev);
        setActive(prev => !prev);
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        
        switch(name) {
            case "username":
                setRegister(prevState => ({
                    [name]: value,
                    email: prevState.email, 
                    password: prevState.password
                }));
                break;
            case "email":
                setRegister(prevState => ({
                    username: prevState.username, 
                    [name]: value,
                    password: prevState.password
                }));
                break;
            case "password":
                setRegister(prevState => ({
                    username: prevState.username, 
                    email: prevState.email, 
                    [name]: value
                }));
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            username: register.username,
            email: register.email,
            password: register.password
        };

        console.log(payload);

        axios({
            url: '/user/saveUser',
            method: 'POST',
            data: payload
        })
        .then((res) => {
            console.log(res);
        }) 
        .catch((err) => {
            console.log("ERROR in NonUserHome - /saveUser", err);
        });
    };

    return (
        <div>
            <Header>
                <div>
                    <img src={ Images.Home } alt="Home Icon"></img>
                    <h1>ESNote</h1>
                </div>
            </Header>

            <Content>
                <div id="presentation">
                    <img src={ Images.Presentation } alt='Effective Study Notebook Explanation Presentation'></img>
                </div>

                <div className="form">
                    <Form onSubmit={ (e) => handleSubmit(e)}>
                        <h1>Login</h1>
                        <input placeholder="Email or Username" required></input>
                        <input placeholder="Password" type="password" required></input>
                        <Button
                            type='submit'
                            colours={ "orange" }>
                            Login
                        </Button>
                        <hr></hr>
                        <h1>Register</h1>
                        <Button
                            onClick={ openSignUpForm }
                            colours={ "blue" }>
                            Sign Up
                        </Button>
                    </Form>
                </div>
            </Content>

            {
                showRegistration && 
                <Registration>
                    <div className='form'>
                        <Form onSubmit={ (e) => { handleSubmit(e); openSignUpForm(); } } active={ active }>
                            <div className='close' onClick={ openSignUpForm }></div>
                            <h1>Sign Up</h1>
                            <input name="username" onChange={ handleChange } placeholder="Username" required></input>
                            <input name="email" onChange={ handleChange } placeholder="Email" required></input>
                            <input name="password" onChange={ handleChange } placeholder="Password" type="password" required></input>
                            <input onChange={ handleChange } placeholder="Confirm Password" type="password" required></input>
                            <Button
                                type='submit'
                                active={ active }
                                colours={ "blue" }>
                                Create an Account
                            </Button>
                        </Form>
                    </div>
                </Registration>
            }
        </div>
    );
}
 
export default NonUserHome;