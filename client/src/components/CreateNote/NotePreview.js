import { useState } from "react";

import { StyledNotePreview } from "./CreateNote.style";
import { Template, Sections } from "./Template.style";
import { NextButton } from "../Common/Button.style";

const NotePreview = ({ sectionValues }) => {

    const [EditNote, setEditNote] = useState(false);

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
            <Template>
                { showSections(sectionValues) }
            </Template>

            <NextButton
                onClick={ openEditNote }>
                Next
            </NextButton>
        </StyledNotePreview>
    );
}
 
export default NotePreview;