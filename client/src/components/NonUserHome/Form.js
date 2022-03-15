import { RegisterForm } from "../Common/Form.style";

const Form = () => {
    return (
        <RegisterForm>
            <h1>Login</h1>

            <input 
                // onChange={ handleChange }
                name="username" 
                placeholder="Username" 
                required>
                
            </input>

            <input
                // onChange={ handleChange } 
                name="password" 
                placeholder="Password" 
                type="password" 
                required>
            </input>
            {/* <ErrorMessages active={ user.username !== "" && user.password !== "" && validLogin === false ? true : false }>
                Username or Password is incorrect!
            </ErrorMessages> */}

            {/* <Button
                type='submit'
                colours={ "orange" }>
                Login
            </Button> */}

            {/* { userPage ? <Navigate to='/user'/> : null } */}

            <hr></hr>

            <h1>Register</h1>

            {/* <Button
                type='button'
                // onClick={ openSignUpForm }
                colours={ "blue" }>
                Sign Up
            </Button> */}
        </RegisterForm>
    );
}
 
export default Form;