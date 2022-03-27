import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotes, NotesGrid, NoteShape, Container } from "./Notes.style";
import { Title } from "../Common/Heading.style";

const Notes = () => {

    const [notes, setNotes] = useState([]);
    const [notePage, setNotePage] = useState(false);

    useEffect(() => {

        getNotes();

    }, []);

    const getNotes = () => {

        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/getNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNotes(res.data);
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /getNotes", error);
        });
    };

    const showNotes = (notes) => {
        return notes.map((note) => (
            <Container key={ note._id }>
                <NoteShape onClick={ handleAddNoteClick }></NoteShape>
                <Title>{ note.title }</Title>
            </Container>
        ));
    };

    const handleAddNoteClick = () => {
        setNotePage(prevState => !prevState);
    }

    return (
        <StyledNotes>
            <SubheaderBar>
                <Subheading>Notes</Subheading>
            </SubheaderBar>

            <NotesGrid>
                <Container>
                    <NoteShape onClick={ handleAddNoteClick }>
                        <img alt="click to add" src={ Images.Plus } />
                    </NoteShape>
                    <Title>Add Note</Title>
                </Container>
                { notes.length > 0 ? showNotes(notes) : null }
            </NotesGrid>

            { notePage ? <Navigate to='/create-note-template'/> : null }

        </StyledNotes>
    );
}
 
export default Notes;