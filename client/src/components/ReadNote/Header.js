import { useState } from "react";
import { Navigate } from "react-router-dom";

import Images from "../../images/Images";
import { HeaderBar, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = ({ note, handleSettings }) => {

    const [editNote, setEditNote] = useState(false);
    const [home, setHome] = useState(false);

    const goHome = () => {
        setHome(prevState => !prevState);
    }

    const handleEditNote = () => {
        localStorage.setItem("newNoteID", note._id);
        setEditNote((prevState) => !prevState);
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

            { home ? <Navigate to='/user-home'/> : null }
            { editNote ? <Navigate to='/edit-note'/> : null }
        </HeaderBar>
    );
}
 
export default Header;
