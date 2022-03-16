import { StyledRegistrationForm } from "../Common/Form.style";

const RegistrationForm = () => {
    return (
        <StyledRegistrationForm 
        // onSubmit={ (e) => { handleRegsitration(e); openSignUpForm(); } } 
        // active={ active }
        >
            <div 
                className='close' 
                // onClick={ openSignUpForm }
                >
            </div>

            <h1>Sign Up</h1>

            <input 
                // onChange={ handleChange } 
                // onFocus={ (e) => handleFocus(e) }
                // onBlur={ (e) => handleBlur(e) }
                name="username" 
                placeholder="Username">
            </input>
            {/* <ErrorMessages active={focus.username && !valid.username ? true : false}>
                Must be 6 to 20 characters and must start with a letter.
            </ErrorMessages> */}

            <input 
                // onChange={ handleChange }
                // onFocus={ (e) => handleFocus(e) }
                // onBlur={ (e) => handleBlur(e) }
                name="email"
                placeholder="Email" 
                type='email'>
            </input>
            {/* <ErrorMessages active={focus.email && !valid.email ? true : false}>
                Must be filled in - example@example.com
            </ErrorMessages> */}

            <input 
                // onChange={ handleChange } 
                // onFocus={ (e) => handleFocus(e) }
                // onBlur={ (e) => handleBlur(e) }
                name="password" 
                placeholder="Password" 
                type="password">
            </input>
            {/* <ErrorMessages active={ focus.password && !valid.password ? true : false}>
                Must be 8 to 20 characters and must have a captial letter, a number and a special character - !@#$%
            </ErrorMessages> */}

            <input 
                // onChange={ (e) => setPasswordMatch(e.target.value) }
                // onFocus={ (e) => handleFocus(e) }
                // onBlur={ (e) => handleBlur(e) }
                name="passwordMatch"
                placeholder="Confirm Password" 
                type="password">
            </input>                                
            {/* <ErrorMessages active={ focus.passwordMatch && !valid.passwordMatch ? true : false}>
                The password and confirm password inputs don't match!
            </ErrorMessages> */}
{/* 
            <Button
                type='submit'
                active={ active }
                colours={ "blue" }>
                Create an Account
            </Button> */}

            {/* { refresh ? <Navigate to='/'/> : null } */}
        </StyledRegistrationForm>
    );
}
 
export default RegistrationForm;