import { useState } from 'react';
import axios from 'axios';

import { StyledRegistrationForm } from "../Common/Form.style";
import { CloseButton } from "../Common/Close.style";
import { FormHeadingModal } from "../Common/Heading.style";
import { Input, InputRegistration } from "../Common/Inputs.style";
import { BlueButtonRegistration } from "../Common/Button.style";
import { ErrorMessages } from "../Common/Messages.style";

const RegistrationForm = ({ 
    user,
    valid,
    setPasswordMatch, 
    handleChange,
    openSignUpForm 
}) => {

    const [refresh, setRefresh] = useState(false);
    const [tried, setTried] = useState(false);
    const [focus, setFocus] = useState({
        username: false,
        email: false,
        password: false,
        passwordMatch: false
    });
    const [usernameTaken, setUsernameTaken] = useState(false);

    const handleRegistration = (event) => {

        event.preventDefault();

        setTried(true);

        console.log(valid);
        
        if(valid.username && valid.email && valid.password && valid.passwordMatch) {

            const payload = {
                username: user.username,
                email: user.email,
                password: user.password
            };

            axios.get('/user/checkUsername', {
                params: {
                    data: payload
                }
            }).then((res) => {
                if(res.data.msg !== "Username Taken") {
                    axios.post('/user/saveUser', {
                        data: payload
                    }).then(() => {

                        // setRefresh((prevState) => !prevState);
                        
                        setUsernameTaken(false);

                    }).catch((err) => {
                        console.log("ERROR in RegistrationForm - /user/saveUser", err);
                    });
                }

                setUsernameTaken(true);

            }).catch((err) => {
                console.log("ERROR in RegistrationForm - /user/checkUsername", err)
            });
        }
    };

    
    const handleFocus = ({ target }) => {

        const { name } = target;
        
        switch(name) {
            case "username":
                setFocus(prevState => ({
                    ...prevState,
                    [name]: true
                }));
                break;

            case "email":
                setFocus(prevState => ({
                    ...prevState,
                    [name]: true
                }));
                break;

            case "password":
                setFocus(prevState => ({
                    ...prevState,
                    [name]: true,
                }));
                break;

            case "passwordMatch":
                setFocus(prevState => ({
                    ...prevState,
                    [name]: true
                }));
                break;

            default:
                break;
        }
    };

    const handleBlur = ({ target }) => {
        const { name } = target;
        
        switch(name) {
            case "username":
                setFocus(prevState => ({
                    ...prevState,
                    [name]: false
                }));
                break;

            case "email":
                setFocus(prevState => ({
                    ...prevState,
                    [name]: false
                }));
                break;

            case "password":
                setFocus(prevState => ({
                    ...prevState,                    
                    [name]: false
                }));
                break;

            case "passwordMatch":
                setFocus(prevState => ({
                    ...prevState,
                    [name]: false
                }));
                break;
                
            default:
                break;
        }
    };

    return (
        <StyledRegistrationForm onSubmit = { (e) => e.preventDefault() }>
                
            <CloseButton onMouseDown={ (e) => openSignUpForm(e) }></CloseButton>
            <FormHeadingModal>Sign Up</FormHeadingModal>

            <InputRegistration 
                onChange={ handleChange } 
                onFocus={ (e) => handleFocus(e) }
                onBlur={ (e) => handleBlur(e) }
                name="username" 
                placeholder="Username">
            </InputRegistration>
            <ErrorMessages 
                active={ (focus.username || tried) && !valid.username || usernameTaken }>
                { usernameTaken ? "Username Already Taken" : "Must be 6 to 20 characters, starting with a letter." } 
            </ErrorMessages>

            <Input 
                onChange={ handleChange }
                onFocus={ (e) => handleFocus(e) }
                onBlur={ (e) => handleBlur(e) }
                name="email"
                placeholder="Email" 
                type='email'>
            </Input>
            <ErrorMessages 
                active={ (focus.email || tried) && !valid.email }>
                Must be filled in - example@example.com
            </ErrorMessages>

            <Input 
                onChange={ handleChange } 
                onFocus={ (e) => handleFocus(e) }
                onBlur={ (e) => handleBlur(e) }
                name="password" 
                placeholder="Password" 
                type="password">
            </Input>
            <ErrorMessages 
                active={ (focus.password || tried) && !valid.password }>
                Must be 8 to 20 characters and must have at least 1 captial letter, 1 number and 1 special character - !@#$%
            </ErrorMessages>

            <Input 
                onChange={ (e) => setPasswordMatch(e.target.value) }
                onFocus={ (e) => handleFocus(e) }
                onBlur={ (e) => handleBlur(e) }
                name="passwordMatch"
                placeholder="Confirm Password" 
                type="password">
            </Input>                                
            <ErrorMessages 
                active={ (focus.passwordMatch || tried) && !valid.passwordMatch }>
                The password and confirm password inputs don't match!
            </ErrorMessages>

            <BlueButtonRegistration
                type='submit'
                onClick={ (e) => { handleRegistration(e);}}>
                Create an Account
            </BlueButtonRegistration>

            { refresh ? window.location.reload(true) : null }
            
        </StyledRegistrationForm>
    );
}
 
export default RegistrationForm;