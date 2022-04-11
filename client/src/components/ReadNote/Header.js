// React Hooks
import { useState } from "react";

// URL Navigation
import { Navigate } from "react-router-dom";

// Image files
import Images from "../../images/Images";
// Styled Components
import { HeaderBar, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

// props passed from 'ReadNote.js'
const Header = ({ note, handleSettings }) => {

    // Sends user to the Read Note page when true
    const [editNote, setEditNote] = useState(false);
    // Sends user to the User Home page when true
    const [home, setHome] = useState(false);


    // Opens the User Home page
    const goHome = () => {
        setHome(prevState => !prevState);
    }

    // Saves the note identifier and
    // Opens the Edit Note page
    const handleEditNote = () => {
        // Save the note identifier in browser storage
        localStorage.setItem("newNoteID", note._id);
        // Open the Edit Note page
        setEditNote(prevState => !prevState);
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
                <WelcomeHeading>Read Note</WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeader>
                <img alt="Edit Note" src={ Images.Edit } onClick={ handleEditNote }></img>
                <img alt="Settings" src={ Images.Setting } onClick={ handleSettings }></img>
            </IconsHeader>

            {/* Change the URL to open User Home page*/}
            { home ? <Navigate to='/user-home'/> : null }

            {/* Change the URL to open Edit Note page*/}
            { editNote ? <Navigate to='/edit-note'/> : null }
        </HeaderBar>
    );
}
 
export default Header;
