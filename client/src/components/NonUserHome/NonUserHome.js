import { useState } from 'react';

import Images from "../../images/Images";

import { Grid } from "./Grid.style";
import { Header } from "./Header.style";
import { Content } from "./Content.style";
import { Form } from "./Form.style";
import Registration from "./Registration";

const NonUserHome = () => {

    const [showRegistration, setShowRegistration] = useState(false);

    const openSignUpForm = () => {
        setShowRegistration(prev => !prev);
        console.log(showRegistration);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Grid>
            <Header>
                <div>
                    <img src={ Images.Home } alt="Home Icon"></img>
                    <h1>ESNote</h1>
                </div>
            </Header>

            {   showRegistration && <Registration /> }

            <Content>
                <div id="presentation">
                </div>

                <div id="register-login">
                    <Form onSubmit={ (e) => handleSubmit(e)}>
                        <h1>Login</h1>
                        <input placeholder="Email or Username"></input>
                        <input placeholder="Password" type="password"></input>
                        <button id="login">Login</button>
                        <hr></hr>
                        <h1>Register</h1>
                        <button id="registration" onClick={ openSignUpForm }>Sign Up</button>
                    </Form>
                </div>
            </Content>
        </Grid>
    );
}
 
export default NonUserHome;