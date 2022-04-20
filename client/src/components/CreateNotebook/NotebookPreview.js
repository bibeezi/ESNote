// React Hooks
import { useState } from "react";

// Promise-based HTTP client
import axios from "axios";

// URL Navigation
import { Navigate } from 'react-router-dom';

// Styled Components
import { StyledPreview } from "../Common/Content.style";
import { TemplateCreateNotebook } from "../Common/Template.style";
import { NextButton } from "../Common/Button.style";
import { Strap, Bookmark } from "../Common/Section.style";

// props passed from 'CreateNotebook.js'
const NotebookPreview = ({ strap, bookmark, colour, title }) => {

    // Opens the Read Notebook page when true
    const [readNotebook, setReadNotebook] = useState(false);

    // Opens the Read Notebook page
    const openReadNotebook = () => {
        setReadNotebook((prevState) => !prevState);
    }

    // Handles when the user clicks the Next button
    const handleNext = (event) => {
        // Stops the form from refreshing the page on render
        event.preventDefault();

        // Gather data to send to server
        const payload = {
            userID: localStorage.getItem("userID"),
            title: title,
            colour: colour,
            noteIDs: JSON.parse(localStorage.getItem("addedNoteIDs")),
            strap: strap,
            bookmark: bookmark,
        }
        
        // Save the notebook details to MongoDB
        axios.post('/notebook/saveNotebook', {
            data: payload
        }).then((res) => {

            // Store the new notebook identifier in the browser storage
            localStorage.setItem("clickedNotebookID", res.data.notebookID);
            
        }) 
        .catch((err) => {
            console.log("ERROR in NotebookPreview - /saveNotebook", err);
        });
    }


    return (
        <StyledPreview>
            
            <div></div>
            
            <TemplateCreateNotebook page="createNotebook" colour={ colour }>

                <Strap strap={ strap }></Strap>

                <Bookmark bookmark={ bookmark }></Bookmark>

            </TemplateCreateNotebook>
            
            <NextButton
                onClick={ (e) => { handleNext(e); openReadNotebook(e); } }> 
                Next
            </NextButton>

            {/* Change the URL to open Read Notebook page*/}
            { readNotebook ? <Navigate to='/read-notebook' /> : null }   
        </StyledPreview>
    );
}
 
export default NotebookPreview;