import { useState } from "react";
import { Navigate } from 'react-router-dom';

import { StyledNotePreview } from "./CreateNote.style";
import { Template, Sections } from "./Template.style";
import { NextButton } from "../Common/Button.style";

const NotePreview = ({ sectionValues }) => {

    const [editNote, setEditNote] = useState(false);

    const openEditNote = () => {
        setEditNote(prevState => !prevState);
    }

    const showSections = (sections) => {
        return sections.map((section) => (
            <Sections section={ section }></Sections>
        ));
    };

    return ( 
        <StyledNotePreview>
            <div></div>

            <Template>
                { showSections(sectionValues) }
            </Template>

            <NextButton
                onClick={ openEditNote }>
                Next
            </NextButton>

            { editNote ? <Navigate to='/edit-note'/> : null }

        </StyledNotePreview>
    );
}
 
export default NotePreview;