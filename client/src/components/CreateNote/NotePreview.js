import { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import { StyledNotePreview } from "./CreateNote.style";
import { Template } from "../Common/Template.style";
import { Sections } from "../Common/Section.style"
import { NextButton } from "../Common/Button.style";

const NotePreview = ({ sectionValues }) => {

    const [editNote, setEditNote] = useState(false);

    const openEditNote = () => {
        setEditNote(prevState => !prevState);
    }

    const showSections = (sections) => {
        return sections.map((section) => ( 
            <Sections key={ section.id } section={ section } />
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
        .then((res) => {
            localStorage.setItem("newNoteID", res.data.noteID);
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

            { editNote ? <Navigate to='/edit-note' /> : null }

        </StyledNotePreview>
    );
}
 
export default NotePreview;