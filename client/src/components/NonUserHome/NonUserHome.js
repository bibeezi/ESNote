import { useState } from 'react';

import Images from "../../images/Images";

import { Header } from "../Common/Header.style";
import { Content } from "../Common/Content.style";
import { Form } from "../Common/Form.style";
import { Registration } from "./Registration.style";
import { Button } from '../Common/Button.style';

const NonUserHome = () => {

    const [showRegistration, setShowRegistration] = useState(false);
    const [active, setActive] = useState(false);

    const openSignUpForm = () => {
        setShowRegistration(prev => !prev);
        setActive(prev => !prev);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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
                        <Form onSubmit={ (e) => handleSubmit(e), openSignUpForm } active={ active }>
                            <div className='close' onClick={ openSignUpForm }></div>
                            <h1>Sign Up</h1>
                            <input placeholder="Username" required></input>
                            <input placeholder="Email" required></input>
                            <input placeholder="Password" type="password" required></input>
                            <input placeholder="Confirm Password" type="password" required></input>
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