import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { HeaderBar, HomeHeader, WelcomeHeader, IconsHeaderCreate } from "../Common/Header.style";
import { HeaderHeading, WelcomeHeading } from "../Common/Heading.style";

const Header = ({ handleSettings, note, noteContent }) => {

    const [home, setHome] = useState(false);

    const goHome = ({ target }) => {

        const title = target.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].childNodes[1];
        const textareas = target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes;

        var newBody = Array.from(textareas).map((child) => {
            return { sectionID: child.name, content: child.value }
        });

        axios.put('/note/saveNote', {
            noteBodies: newBody,
            noteTitle: title.value,
            noteTemplate: noteContent.template,
            noteID: note._id
        })
        .then((res) => {

        })
        .catch((err) => {
            console.log("ERROR in EditNote - /saveNote", err);
        });

        setHome(prevState => !prevState);
    }

    return (
        <HeaderBar>
            <HomeHeader>
                <img
                    src={ Images.Home }
                    alt="Home Icon"
                    onClick={ (e) => goHome(e) }>
                </img>
                <HeaderHeading onClick={ (e) => goHome(e) }>ESNote</HeaderHeading>
            </HomeHeader>

            <WelcomeHeader>
                <WelcomeHeading>Edit Note</WelcomeHeading>
            </WelcomeHeader>
            
            <IconsHeaderCreate>
                <img alt="Settings" src={ Images.Setting } onClick={ handleSettings }></img>
            </IconsHeaderCreate>

            { home ? <Navigate to='/user-home'/> : null }

        </HeaderBar>
    );
}
 
export default Header;