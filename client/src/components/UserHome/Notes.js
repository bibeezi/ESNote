import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotes, NotesGrid, Note, NoteContainer } from "./Notes.style";
import { Title } from "../Common/Heading.style";

const Notes = () => {

    const username = localStorage.getItem("username");
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
        return notes.map((note, index) => (
            <NoteContainer>
                <Note key={ index } onClick={ handleAddNoteClick }></Note>
                <Title>{ note.title }</Title>
            </NoteContainer>
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
                <NoteContainer>
                    <Note onClick={ handleAddNoteClick }>
                        <img src={ Images.Plus } />
                    </Note>
                    <Title>Add Note</Title>
                </NoteContainer>
                { notes.length && showNotes(notes) }
            </NotesGrid>
        </StyledNotes>
    );
}
 
export default Notes;