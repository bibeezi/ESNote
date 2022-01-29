import { useState } from 'react';

import Images from "../../images/Images";

import { Header } from "./Header.style";
import { Content } from "./Content.style";
import { Form } from "./Form.style";
import { Registration } from "./Registration.style";

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
                        <input placeholder="Email or Username"></input>
                        <input placeholder="Password" type="password"></input>
                        <button colour={ "orange" }>Login</button>
                        <hr></hr>
                        <h1>Register</h1>
                        <button
                            onClick={ openSignUpForm }
                            colour={ "blue" }>
                            Sign Up
                        </button>
                    </Form>
                </div>
            </Content>

            {
                showRegistration && 
                <Registration>
                    <div className='form'>
                        <Form onSubmit={ (e) => handleSubmit(e)} active={ active }>
                            <h1>Sign Up</h1>
                            <input placeholder="Username"></input>
                            <input placeholder="Email"></input>
                            <input placeholder="Password" type="password"></input>
                            <input placeholder="Confirm Password"></input>
                            <button
                                onClick={ openSignUpForm } 
                                active={ active }
                                colour={ "grey" }>
                                Cancel
                            </button>
                            <button
                                onClick={ openSignUpForm } 
                                active={ active }
                                colour={ "blue" }>
                                Create an Account
                            </button>
                        </Form>
                    </div>
                </Registration>
            }
        </div>
    );
}
 
export default NonUserHome;