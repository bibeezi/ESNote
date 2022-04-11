// React Hooks
import { useState } from "react";

// Promise-based HTTP client
import axios from 'axios';

// URL Navigation
import { Navigate } from 'react-router-dom';

// Styled Components
import { StyledPreview } from "../Common/Content.style";
import { Template } from "../Common/Template.style";
import { Sections, GridLines } from "../Common/Section.style"
import { NextButton } from "../Common/Button.style";

// props passed from 'CreateNote.js'
const NotePreview = ({ sectionValues }) => {

    // Sends user to the Edit Note page when true
    const [editNote, setEditNote] = useState(false);

    // Displays the sections onto the Template component
    const showSections = (sections) => {
        // Return the Sections components to render
        return sections.map((section) => ( 
            <Sections 
                key={ section.id } 
                section={ section }
                colour={ section.colour }>
            </Sections>
        ));
    };

    const handleNext = (event) => {
        // Stops the form from refreshing the page on render
        event.preventDefault();

        // Gather data to send to server
        const payload = {
            userID: localStorage.getItem("userID"),
            sections: sectionValues
        };

        // Save the new template to MongoDB
        axios.post('/template/saveTemplate', {
            data: payload
        }).then((res) => {
            // The new note has been created with the new template
            if(res.data.msg === 'Note and Template Saved') {
                // Save the new note identifier so that it can be displayed
                // in the dit Note page.
                localStorage.setItem("clickedNoteID", res.data.noteID);

                // open the Edit Note page
                setEditNote(prevState => !prevState);
            }
        }).catch((err) => {
            console.log("ERROR in NotePreview - /template/saveTemplate", err);
        });

    };

    return ( 
        <StyledPreview>
            <div></div>

            <Template>
                {/* Display the grid's lines in the template */}
                <GridLines gridRow={ 1 } gridColumn={ 1 } /> 
                <GridLines gridrow={ 1 } gridcolumn={ 2 } /> 
                <GridLines gridRow={ 1 } gridColumn={ 3 } /> 
                <GridLines gridRow={ 1 } gridColumn={ 4 } /> 
                <GridLines gridRow={ 2 } gridColumn={ 1 } /> 
                <GridLines gridRow={ 2 } gridColumn={ 2 } /> 
                <GridLines gridRow={ 2 } gridColumn={ 3 } /> 
                <GridLines gridRow={ 2 } gridColumn={ 4 } /> 
                <GridLines gridRow={ 3 } gridColumn={ 1 } /> 
                <GridLines gridRow={ 3 } gridColumn={ 2 } /> 
                <GridLines gridRow={ 3 } gridColumn={ 3 } /> 
                <GridLines gridRow={ 3 } gridColumn={ 4 } /> 
                <GridLines gridRow={ 4 } gridColumn={ 1 } /> 
                <GridLines gridRow={ 4 } gridColumn={ 2 } /> 
                <GridLines gridRow={ 4 } gridColumn={ 3 } /> 
                <GridLines gridRow={ 4 } gridColumn={ 4 } /> 

                {/* Display each section in the template */}
                { showSections(sectionValues) }
            </Template>

            <NextButton
                onClick={ (e) => handleNext(e) }>
                Next
            </NextButton>

            {/* Change the URL to open Edit Note page*/}
            { editNote ? <Navigate to='/edit-note' /> : null }

        </StyledPreview>
    );
}
 
export default NotePreview;