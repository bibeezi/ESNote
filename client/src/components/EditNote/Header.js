import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { HeaderBar, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = ({ handleSettings }) => {

    const [home, setHome] = useState(false);

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
                <WelcomeHeading>Edit Note</WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeader>
                <img alt="Settings" src={ Images.Setting } onClick={ handleSettings }></img>
            </IconsHeader>

            { home ? <Navigate to='/user-home'/> : null }

        </HeaderBar>
    );
}
 
export default Header;