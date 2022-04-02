import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotes, StyledGrid, StyledShape, StyledContainer } from "./UserHome.style";
import { UserHomeTitle } from "../Common/Heading.style";

import { UserHomeSections } from "../Common/Section.style";
import { TemplateUserHome } from "../Common/Template.style";

const Notes = () => {

    const [notes, setNotes] = useState([]);
    const [noteTemplates, setNoteTemplates] = useState([]);
    const [createNoteTemplate, setCreateNoteTemplate] = useState(false);
    const [readNote, setReadNote] = useState(false);

    useEffect(() => {

        getNotes();

    }, []);

    const getNotes = () => {

        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/note/getNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            res.data.msg !== "Notes Not Found" && setNotes(res.data);

            getTemplates(res.data);
        })
        .catch((error) => {
            console.log("ERROR in Notes - /getNotes", error);
        });
    };

    const getTemplates = (noteIDs) => {

        const payload = {
            userID: localStorage.getItem("userID"),
            noteIDs: noteIDs
        };

        axios.get('/template/getTemplates', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNoteTemplates(res.data);
        })
        .catch((error) => {
            console.log("ERROR in Notes - /getTemplates", error);
        });
    }

    const showNotes = (notes) => {
        return notes.map((note) => {
            const template = noteTemplates.filter((template) => template._id === note.template);

            return (
                <StyledContainer key={ note._id }>
                    <TemplateUserHome shape={ "note" }>
                        { template[0].sections.map((section, index) => 
                            section._id === note.body[index].sectionID ?
                                <UserHomeSections
                                    key={ section._id }
                                    id={ note._id }
                                    onClick={ (e) => handleReadNote(e) }
                                    section={ section }>
                                    { note.body[index].content }
                                </UserHomeSections>
                            :
                                null
                        ) }
                    </TemplateUserHome>

                    <UserHomeTitle>{ note.title }</UserHomeTitle> 
                </StyledContainer>
            );
        });
    };

    const handleReadNote = ({ target }) => {

        const payload = {
            noteID: target.id
        };

        axios.get('/note/getNote', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            res.data !== null ? localStorage.setItem("clickedNoteID", res.data._id) : alert("Can't get this note!");
            
            setReadNote((prevState) => !prevState);
        })
        .catch((error) => {
            console.log("ERROR in Notes - /getNote", error);
        });
    }

    const handleNewNote = () => {
        setCreateNoteTemplate(prevState => !prevState);
    }

    return (
        <StyledNotes>
            <SubheaderBar>
                <Subheading>Notes</Subheading>
            </SubheaderBar>

            <StyledGrid>
                <StyledContainer>
                    <StyledShape onClick={ handleNewNote } shape={ "note" }>
                        <img alt="click to add" src={ Images.Plus } />
                    </StyledShape>
                    <UserHomeTitle>Add Note</UserHomeTitle>
                </StyledContainer>
                { notes.length > 0 && noteTemplates.length > 0 ? showNotes(notes) : null }
            </StyledGrid>

            { createNoteTemplate ? <Navigate to='/create-note-template'/> : null }
            { readNote ? <Navigate to='/read-note' /> : null }

        </StyledNotes>
    );
}
 
export default Notes;