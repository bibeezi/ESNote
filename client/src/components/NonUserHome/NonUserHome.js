import Images from "../../images/Images";

import { Grid } from "./Grid.style";
import { Header } from "./Header.style";

const NonUserHome = () => {
    return (
        <div>
            <Header>
                <div>
                    <img src={ Images.Home } alt="Home Icon"></img>
                    <h1>ESNote</h1>
                </div>
            </Header>

            <Grid>
                <div id="presentation">
                    <div id="video">
                        video
                    </div>
                </div>

                <div id="register-login-form">
                    <form>
                        <h1>Login</h1>
                        <label>Email or Username</label>
                        <input placeholder="Email or Username"></input>
                        <label>Password</label>
                        <input placeholder="Password"></input>
                        <button>Login</button>
                        <hr></hr>
                        <h1>Register</h1>
                        <button>Sign Up</button>
                    </form>
                </div>
            </Grid>
        </div>
    );
}
 
export default NonUserHome;