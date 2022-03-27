import { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import { StyledNotePreview } from "./CreateNote.style";
import { Template, Sections } from "./Template.style";
import { NextButton } from "../Common/Button.style";

const NotePreview = ({ sectionValues, sectionCounter }) => {

    const [editNote, setEditNote] = useState(false);

    const openEditNote = () => {
        setEditNote(prevState => !prevState);
    }

    const showSections = (sections) => {
        return sections.map((section) => (
            <Sections section={ section }></Sections>
        ));
    };

    const handleNext = (event) => {
        event.preventDefault();

        const payload = {
            userID: localStorage.getItem("userID"),
            sections: sectionValues
        };

        axios({
            url: '/template/saveTemplate',
            method: 'POST',
            data: payload
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
        .then((data) => {

        }) 
        .catch((err) => {
            console.log("ERROR in CreateNote - /saveTemplate", err);
        });
    };

    return ( 
        <StyledNotePreview>
            <div></div>

            <Template>
                { showSections(sectionValues) }
            </Template>

            <NextButton
                onClick={ (e) => { openEditNote(); handleNext(e); } }>
                Next
            </NextButton>

            { editNote ? <Navigate to='/edit-note'/> : null }

        </StyledNotePreview>
    );
}
 
export default NotePreview;