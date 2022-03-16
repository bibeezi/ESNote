import { StyledRegistrationForm } from "../Common/Form.style";
import { CloseButton } from "../Common/Close.style";
import { FormHeadingNoMargin } from "../Common/Heading.style";
import { Input, InputRegistration } from "../Common/Inputs.style";
import { BlueButtonMargin } from "../Common/Button.style";

const RegistrationForm = ({ openSignUpForm }) => {
    return (
        <StyledRegistrationForm 
        // onSubmit={ (e) => { handleRegsitration(e); openSignUpForm(); } } 
        // active={ active }
        >
            <CloseButton onClick={ openSignUpForm }></CloseButton>
            <FormHeadingNoMargin>Sign Up</FormHeadingNoMargin>

            <InputRegistration 
                // onChange={ handleChange } 
                // onFocus={ (e) => handleFocus(e) }
                // onBlur={ (e) => handleBlur(e) }
                name="username" 
                placeholder="Username">
            </InputRegistration>
            {/* <ErrorMessages active={focus.username && !valid.username ? true : false}>
                Must be 6 to 20 characters and must start with a letter.
            </ErrorMessages> */}

            <Input 
                // onChange={ handleChange }
                // onFocus={ (e) => handleFocus(e) }
                // onBlur={ (e) => handleBlur(e) }
                name="email"
                placeholder="Email" 
                type='email'>
            </Input>
            {/* <ErrorMessages active={focus.email && !valid.email ? true : false}>
                Must be filled in - example@example.com
            </ErrorMessages> */}

            <Input 
                // onChange={ handleChange } 
                // onFocus={ (e) => handleFocus(e) }
                // onBlur={ (e) => handleBlur(e) }
                name="password" 
                placeholder="Password" 
                type="password">
            </Input>
            {/* <ErrorMessages active={ focus.password && !valid.password ? true : false}>
                Must be 8 to 20 characters and must have a captial letter, a number and a special character - !@#$%
            </ErrorMessages> */}

            <Input 
                // onChange={ (e) => setPasswordMatch(e.target.value) }
                // onFocus={ (e) => handleFocus(e) }
                // onBlur={ (e) => handleBlur(e) }
                name="passwordMatch"
                placeholder="Confirm Password" 
                type="password">
            </Input>                                
            {/* <ErrorMessages active={ focus.passwordMatch && !valid.passwordMatch ? true : false}>
                The password and confirm password inputs don't match!
            </ErrorMessages> */}

            <BlueButtonMargin
                type='submit'
                // active={ active }
                colours={ "blue" }>
                Create an Account
            </BlueButtonMargin>

            {/* { refresh ? <Navigate to='/'/> : null } */}

        </StyledRegistrationForm>
    );
}
 
export default RegistrationForm;