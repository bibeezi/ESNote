import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import { StyledPreview } from "../Common/Content.style";
import { TemplateCreateNotebook } from "../Common/Template.style";
import { NextButton } from "../Common/Button.style";
import { Strap, Bookmark } from "../Common/Section.style";

const NotebookPreview = ({ strapValues, bookmarkValues, colour, title }) => {

    const [readNotebook, setReadNotebook] = useState();

    const openReadNotebook = () => {
        setReadNotebook((prevState) => !prevState);
    }

    const handleNext = (event) => {
        event.preventDefault();

        const payload = {
            userID: localStorage.getItem("userID"),
            title: title,
            colour: colour,
            noteIDs: JSON.parse(localStorage.getItem("addedNoteIDs")),
            strap: strapValues,
            bookmark: bookmarkValues,
        }

        axios({
            url: '/notebook/saveNotebook',
            method: 'POST',
            data: payload
        })
        .then((res) => {
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
                <Strap strap={ strapValues }></Strap>
                <Bookmark bookmark={ bookmarkValues }></Bookmark>
            </TemplateCreateNotebook>
            
            <NextButton
                onClick={ (e) => { handleNext(e); openReadNotebook(e); } }> 
                Next
            </NextButton>

            { readNotebook ? <Navigate to='/read-notebook' /> : null }   
        </StyledPreview>
    );
}
 
export default NotebookPreview;