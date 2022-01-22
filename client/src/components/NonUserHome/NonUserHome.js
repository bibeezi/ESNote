import Images from "../../images/Images";

import { Grid } from "./Grid.style";
import { Header } from "./Header.style";
import { Content } from "./Content.style";
import { Form } from "./Form.style";

const NonUserHome = () => {
    return (
        <Grid>
            <Header>
                <div>
                    <img src={ Images.Home } alt="Home Icon"></img>
                    <h1>ESNote</h1>
                </div>
            </Header>

            <Content>
                <div id="presentation">
                </div>

                <div id="register-login">
                    <Form>
                        <h1>Login</h1>
                        <input placeholder="Email or Username"></input>
                        <input placeholder="Password" type="password"></input>
                        <button id="login">Login</button>
                        <hr></hr>
                        <h1>Register</h1>
                        <button id="registration">Sign Up</button>
                    </Form>
                </div>
            </Content>
        </Grid>
    );
}
 
export default NonUserHome;