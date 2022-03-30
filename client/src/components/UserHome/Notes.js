import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotes, NotesGrid, NoteShape, NoteContainer } from "./Notes.style";
import { Title } from "../Common/Heading.style";

const Notes = () => {

    const [notes, setNotes] = useState([]);
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
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /getNotes", error);
        });
    };

    const showNotes = (notes) => {
        return notes.map((note) => (
            <NoteContainer key={ note._id }>
                <NoteShape id={ note._id } onClick={ (e) => { handleAddNote(e) } }></NoteShape>
                <Title>{ note.title }</Title>
            </NoteContainer>
        ));
    };

    const handleAddNote = ({ target }) => {

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
            
            setReadNote(true);
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

            <NotesGrid>
                <NoteContainer>
                    <NoteShape onClick={ handleNewNote }>
                        <img alt="click to add" src={ Images.Plus } />
                    </NoteShape>
                    <Title>Add Note</Title>
                </NoteContainer>
                { notes.length > 0 ? showNotes(notes) : null }
            </NotesGrid>

            { createNoteTemplate ? <Navigate to='/create-note-template'/> : null }
            { readNote ? <Navigate to='/read-note' /> : null }

        </StyledNotes>
    );
}
 
export default Notes;