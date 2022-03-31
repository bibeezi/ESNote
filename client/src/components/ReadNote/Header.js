import { useState } from "react";
import { Navigate } from "react-router-dom";

import Images from "../../images/Images";

import { HeaderBar, HomeHeader, WelcomeHeader, IconsHeader } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = ({ note }) => {

    const [editNote, setEditNote] = useState(false);

    const handleEditNote = () => {
        localStorage.setItem("newNoteID", note._id);
        setEditNote((prevState) => !prevState);
    }

    return (
        <HeaderBar>
            <HomeHeader>   
                <img
                    src={ Images.Home }
                    alt="Home Icon">
                </img>
                <HeaderHeading>ESNote</HeaderHeading>
            </HomeHeader>

            <WelcomeHeader>
                <WelcomeHeading>Read Note</WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeader>
                <img alt="Edit Note" src={ Images.Edit } onClick={ handleEditNote }></img>
                <img alt="Toggle as Favourite" src={ Images.NotFavourited }></img>
                <img alt="Settings" src={ Images.Setting }></img>
                <img alt="Help" src={ Images.Question }></img>
            </IconsHeader>

            { editNote ? <Navigate to='/edit-note'/> : null }
        </HeaderBar>
    );
}
 
export default Header;
