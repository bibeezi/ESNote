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

const Notes = ({ search, sortBy, notes, noteTemplates }) => {

    const [createNoteTemplate, setCreateNoteTemplate] = useState(false);
    const [readNote, setReadNote] = useState(false);
    const [searchedNotes, setSearchedNotes] = useState([]);


    useEffect(() => {
        searchSortNotes();
    }, [notes, noteTemplates, search, sortBy]);


    const showNotes = (notes) => {
        return notes.map((note) => {
            const template = noteTemplates.filter((template) => template._id === note.template);

            return (
                <StyledContainer key={ note._id }>
                    <TemplateUserHome shape={ "note" }>
                        { template[0].sections.map((section, index) =>
                            note.body.length === 1 && template[0].sections.length === 1 ?
                                note.body[index].sectionID === section._id ?
                                <UserHomeSections
                                    key={ section._id }
                                    id={ note._id }
                                    onClick={ (e) => handleReadNote(e) }
                                    section={ section }>
                                    { note.body[index].content }
                                </UserHomeSections> 
                                :
                                    null
                            : 

                            <UserHomeSections
                                key={ section._id }
                                id={ note._id }
                                onClick={ (e) => handleReadNote(e) }
                                section={ section }>
                                { note.body[0].content }
                            </UserHomeSections>
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

    const searchSortNotes = () => {

        var filteredNotes = notes.filter((note) => 
            note.title.toLowerCase().search(search.toLowerCase()) !== -1 ||
            Object.values(note.body).some(val => val.content.toLowerCase().search(search.toLowerCase()) !== -1));

        switch(sortBy) {
            case "nameDESC":
                filteredNotes = filteredNotes.sort((note1, note2) => {
                    if(note1.title < note2.title) { return -1; }
                    if(note1.title > note2.title) { return 1; }
                    return 0;
                });
                break;
            case "dateDESC":
                filteredNotes = filteredNotes.sort((note1, note2) => {
                    if(note1.date < note2.date) { return -1; }
                    if(note1.date > note2.date) { return 1; }
                    return 0;
                });
                break;
            case "nameASC":
                filteredNotes = filteredNotes.sort((note1, note2) => {
                    if(note1.title < note2.title) { return 1; }
                    if(note1.title > note2.title) { return -1; }
                    return 0;
                });
                break;
            case "dateASC":
                filteredNotes = filteredNotes.sort((note1, note2) => {
                    if(note1.date < note2.date) { return 1; }
                    if(note1.date > note2.date) { return -1; }
                    return 0;
                });
                break;
            default:
                break;
        }
        
        setSearchedNotes(filteredNotes);
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
                { notes.length > 0 && noteTemplates.length > 0 ? showNotes(searchedNotes) : null }

            </StyledGrid>

            { createNoteTemplate ? <Navigate to='/create-note-template'/> : null }
            { readNote ? <Navigate to='/read-note' /> : null }

        </StyledNotes>
    );
}
 
export default Notes;