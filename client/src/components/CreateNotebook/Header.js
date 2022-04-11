// React Hooks
import { useState } from 'react';

// URL Navigation
import { Navigate } from 'react-router-dom';

// Image files
import Images from "../../images/Images";
// Styled Components
import { HeaderBar, HomeHeader, WelcomeHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = () => {

    // Sends user to the User Home page when true
    const [home, setHome] = useState(false);

    // Opens the User Home page
    const goHome = () => {
        setHome(prevState => !prevState);
    }

    return (
        <HeaderBar>
            <HomeHeader>
                <img
                    src={ Images.Home }
                    alt="Home Icon"
                    onClick={ goHome }>
                </img>
                <HeaderHeading onClick={ goHome }>ESNote</HeaderHeading>
            </HomeHeader>

            <WelcomeHeader>
                <WelcomeHeading>Create Notebook</WelcomeHeading>
            </WelcomeHeader>

            {/* Change the URL to open User Home page*/}
            { home ? <Navigate to='/user-home'/> : null }
        </HeaderBar>
    );
}
 
export default Header;
