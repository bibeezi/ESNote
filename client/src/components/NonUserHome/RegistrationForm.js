// React Hooks
import { useState } from 'react';

// Promise-based HTTP client
import axios from 'axios';

// Styled Components
import { StyledRegistrationForm } from "../Common/Form.style";
import { CloseButton } from "../Common/Close.style";
import { FormHeadingModal } from "../Common/Heading.style";
import { Input, InputRegistration } from "../Common/Inputs.style";
import { BlueButtonRegistration } from "../Common/Button.style";
import { ErrorMessages } from "../Common/Messages.style";

const RegistrationForm = ({ 
    // props passed from NonUserHome.js
    user,
    valid,
    handleChange,
    openSignUpForm 
}) => {

    // Refreshes window when true
    const [refresh, setRefresh] = useState(false);

    // Shows error messages when user registers with an invalid form
    const [tried, setTried] = useState(false);
    const [usernameTaken, setUsernameTaken] = useState(false);


    // Handles submission of registation form when 
    // 'Create an account' button is clicked
    const handleRegistration = (event) => {
        // Stops the form from refreshing the page on render
        event.preventDefault();

        // The user has tried to register
        setTried(true);
        
        // Only send a request when all input values are valid
        if(valid.username && valid.email && valid.password && valid.passwordMatch) {

            // Gather data to send
            const payload = {
                username: user.username,
                email: user.email,
                password: user.password
            };

            // Finds the username in MongoDB
            axios.get('/user/checkUsername', {
                params: {
                    data: payload
                }
            }).then((res) => {
                // The username is not taken
                if(res.data.msg !== "Username Taken") {

                    // saves the user to MongoDB
                    axios.post('/user/saveUser', {
                        data: payload
                    }).then(() => {
                        // Refresh the page
                        setRefresh(prevState => !prevState);
                        
                        // reset the usernameTaken to hide
                        // specific error message
                        setUsernameTaken(false);
                        
                    }).catch((err) => {
                        console.log("ERROR in RegistrationForm - /user/saveUser", err);
                    });
                }

                // The username is taken
                setUsernameTaken(true);

            }).catch((err) => {
                console.log("ERROR in RegistrationForm - /user/checkUsername", err)
            });
        }
    };

    // Close 'username taken' error message 
    // when user changes the username input
    const handleFocus = () => {
        setUsernameTaken(false);
    };

    return (
        <StyledRegistrationForm onSubmit = { (e) => e.preventDefault() }>
                
            <CloseButton onMouseDown={ (e) => openSignUpForm(e) }></CloseButton>
            <FormHeadingModal>Sign Up</FormHeadingModal>

            <InputRegistration 
                onChange={ (e) => handleChange(e) } 
                onFocus={ (e) => handleFocus(e) }
                name="username" 
                placeholder="Username">
            </InputRegistration>
            { tried && !valid.username || usernameTaken ?
                <ErrorMessages>
                    { usernameTaken ? 
                        "Username Already Taken" 
                    : 
                        "Must be 6 to 20 characters, starting with a letter." 
                    } 
                </ErrorMessages>
            :
                null
            }
            
            <Input 
                onChange={ (e) => handleChange(e) }
                name="email"
                placeholder="Email" 
                type='email'>
            </Input>
            { tried && !valid.email ?
                <ErrorMessages>
                    Must be filled in - example@example.com
                </ErrorMessages>
            :
                null
            }
            
            <Input 
                onChange={ (e) => handleChange(e) }
                name="password" 
                placeholder="Password" 
                type="password">
            </Input>
            { tried && !valid.password ?
                <ErrorMessages>
                    Must be at least 8 characters and 
                    must have at least 1 captial letter, 
                    1 number and 1 special character - !@#$%
                </ErrorMessages>
            :
                null
            }

            <Input 
                onChange={ (e) => handleChange(e) }
                name="passwordMatch"
                placeholder="Confirm Password" 
                type="password">
            </Input>      
            { tried && !valid.passwordMatch ?
                <ErrorMessages>
                    The password and confirm password inputs don't match!
                </ErrorMessages>
            :
                null
            }

            <BlueButtonRegistration
                type='submit'
                onClick={ (e) => handleRegistration(e) }>
                Create an Account
            </BlueButtonRegistration>

            {/* Refresh the window when required else do nothing */}
            { refresh ? window.location.reload(true) : null }
            
        </StyledRegistrationForm>
    );
}
 
export default RegistrationForm;