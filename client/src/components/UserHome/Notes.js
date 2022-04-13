// React Hooks
import { useState, useEffect } from "react";

// URL Navigation
import { Navigate } from 'react-router-dom';

// Image files
import Images from "../../images/Images";
// Styled Components
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotes, StyledGrid, StyledShape, StyledContainer } from "./UserHome.style";
import { UserHomeTitle } from "../Common/Heading.style";
import { UserHomeSections } from "../Common/Section.style";
import { TemplateUserHome } from "../Common/Template.style";

// props passed from 'UserHome.js'
const Notes = ({ search, sortBy, notes, noteTemplates }) => {

    // Sends user to the Create Note Template page when true
    const [createNoteTemplate, setCreateNoteTemplate] = useState(false);
    // Sends user to the Read Note page when true
    const [readNote, setReadNote] = useState(false);

    // The search result of the notes
    const [searchedNotes, setSearchedNotes] = useState([]);


    // runs when notes, search and sortBy states are changed
    useEffect(() => {
        
        var searchValue = search.toLowerCase()

        // Checks the title and content of each section of the note
        // and removes the notes that do not match the searchValue
        var filteredNotes = notes.filter(note => 
            // title check
            note.title.toLowerCase().search(searchValue) !== -1 
            ||
            // note's contents check
            Object.values(note.body).some(val => 
                val.content.toLowerCase().search(searchValue) !== -1
            )
        );

        // Sorts the notes depending on the select's value
        switch(sortBy) {
            // The sort function takes two elements in the array,
            // compares their values to each other and only 
            // swaps if note1 is more than 2.
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
        
        // display the filtered notes
        setSearchedNotes(filteredNotes);

    }, [notes, search, sortBy]);


    // Displays the notes onto the StyledGrid component
    const showNotes = (notes) => {
        // Return the StyledContainer components to render
        return notes.map((note) => {
            // Get the template used by the note in question
            const template = noteTemplates.filter(template => template._id === note.template);

            // Renders the corresponding code block depending on note template
            return (
                <StyledContainer key={ note._id }>
                    <TemplateUserHome 
                        shape={ "note" } 
                        id={ note._id } 
                        onClick={ (e) => handleReadNote(e) }>

                        {/* For every section of the template */}
                        { template[0].sections.map((section, index) =>

                            // check if note's current section ID matches with
                            // the template's current section ID
                            note.body[index].sectionID === section._id ?
                                // display section with note content
                                <UserHomeSections
                                    key={ section._id }
                                    id={ note._id }
                                    section={ section }>
                                    { note.body[index].content }
                                </UserHomeSections> 
                            :
                                // don't display section
                                null
                                
                        ) }
                    </TemplateUserHome>

                    {/* Display title under note */}
                    <UserHomeTitle
                        id={ note._id } 
                        onClick={ (e) => handleReadNote(e) }>
                        { note.title }
                    </UserHomeTitle> 
                </StyledContainer>
            );
        });
    };

    // Handles the user clicking on a note
    const handleReadNote = ({ target }) => {
        // Store the clicked note's ID to open in 
        // the Read Note page
        localStorage.setItem("clickedNoteID", target.id);

        // Opens the Read Note page
        setReadNote(prevState => !prevState);
    }

    // Handles the 'Add Note' button
    const handleNewNote = () => {
        // Opens the Create Note Template page
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

                    <UserHomeTitle onClick={ handleNewNote }>Add Note</UserHomeTitle>
                </StyledContainer>

                {/* Displays notes if there are notes and templates, 
                otherwise display nothing */}    
                { notes.length > 0 && noteTemplates.length > 0 ? 
                    showNotes(searchedNotes)
                : 
                    null 
                }
            </StyledGrid>

            {/* Change the URL to open the Create Note Template page */}
            { createNoteTemplate ? <Navigate to='/create-note-template'/> : null }

            {/* Change the URL to open the Read Note page */}
            { readNote ? <Navigate to='/read-note' /> : null }

        </StyledNotes>
    );
}
 
export default Notes;