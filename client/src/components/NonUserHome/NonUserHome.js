import Images from "../../images/Images";

import { Grid } from "./Grid.style";
import { Header } from "./Header.style";

const NonUserHome = () => {
    return (
        <div className="wrapper">
            <Header>
                <div>
                    <img src={ Images.Home } alt="Home Icon"></img>
                    <h1>ESNote</h1>
                </div>
            </Header>

            <Grid>
                <div id="presentation">
                </div>

                <div id="register-login">
                    <form id="form">
                        <h1>Login</h1>
                        <input placeholder="Email or Username"></input>
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