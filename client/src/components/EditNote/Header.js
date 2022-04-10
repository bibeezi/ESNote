// React Hooks
import { useState } from "react";

// URL Navigation
import { Navigate } from 'react-router-dom';

// Image files
import Images from "../../images/Images";
// Styled Components
import { HeaderBar, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

// props passed from 'EditNote.js'
const Header = ({ handleSettings, handleSave }) => {

    // Sends user to the Read Note page when true
    const [readNote, setReadNote] = useState(false);

    const handleReadNote = () => {
        setReadNote(prevState => !prevState);
    }

    // Sends user to the User Home page when true
    const [home, setHome] = useState(false);

    // Save the note and open the User Home page
    const goHome = () => {

        // Save note
        handleSave("home");

        // open the User Home page
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
                <img alt="read note" src={ Images.Read } onClick={ handleReadNote }></img>
                <img alt="Settings" src={ Images.Setting } onClick={ handleSettings }></img>
            </IconsHeader>

            {/* Change the URL to open User Home page*/}
            { home ? <Navigate to='/user-home'/> : null }

            {/* Change the URL to open Read Note page*/}
            { readNote ? <Navigate to='/read-note'/> : null }

        </HeaderBar>
    );
}
 
export default Header;