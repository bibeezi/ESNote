// React Hooks
import { useState, useEffect } from "react";

// URL Navigation
import { Navigate } from 'react-router-dom';

// Image files
import Images from "../../images/Images";
// Styled Components
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotebooks, StyledGrid, StyledContainer, StyledShape } from "./UserHome.style";
import { UserHomeTitle } from "../Common/Heading.style";
import { TemplateUserHome } from "../Common/Template.style";
import { Strap, Bookmark } from "../Common/Section.style";

// props passed from 'UserHome.js'
const Notebooks = ({ search, notes, sortBy, notebooks }) => {

    // Sends user to the Create Notebook page when true
    const [createNotebook, setCreateNotebook] = useState(false);
    // Sends user to the Read Notebook page when true
    const [readNotebook, setReadNotebook] = useState(false);

    // The search result of the notebooks
    const [searchedNotebooks, setSearchedNotebooks] = useState([]);


    // runs when notebooks, search and sortBy states are changed
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
        
        // Gets the IDs of all the notes after the filter
        var noteIDs = filteredNotes.map(note => note._id);

        // Checks the title and notes of each notebook
        // and removes the notebooks that do not have a note in the noteIDs 
        // array and whose title does not match with the searchValue
        var filteredNotebooks = notebooks.filter(notebook => 
            notebook.notes.some(val => noteIDs.includes(val)) 
            || 
            notebook.title.toLowerCase().search(searchValue) !== -1);        
        
        // Sorts the notes depending on the select's value
        switch(sortBy) {
            // The sort function takes two elements in the array,
            // compares their values to each other and only 
            // swaps if note1 is more than 2.
            case "nameDESC":
                filteredNotebooks = filteredNotebooks.sort((notebook1, notebook2) => {
                    if(notebook1.title < notebook2.title) { return -1; }
                    if(notebook1.title > notebook2.title) { return 1; }
                    return 0;
                });
                break;
            case "dateDESC":
                filteredNotebooks = filteredNotebooks.sort((notebook1, notebook2) => {
                    if(notebook1.date < notebook2.date) { return -1; }
                    if(notebook1.date > notebook2.date) { return 1; }
                    return 0;
                });
                break;
            case "nameASC":
                filteredNotebooks = filteredNotebooks.sort((notebook1, notebook2) => {
                    if(notebook1.title < notebook2.title) { return 1; }
                    if(notebook1.title > notebook2.title) { return -1; }
                    return 0;
                });
                break;
            case "dateASC":
                filteredNotebooks = filteredNotebooks.sort((notebook1, notebook2) => {
                    if(notebook1.date < notebook2.date) { return 1; }
                    if(notebook1.date > notebook2.date) { return -1; }
                    return 0;
                });
                break;
            default:
                break;
        }
        
        // display the filtered notebooks
        setSearchedNotebooks(filteredNotebooks);
    }, [notebooks, notes, search, sortBy]);


    // Displays the notebooks onto the StyledGrid component
    const showNotebooks = (notebooks) => {
        // Return the StyledContainer components to render
        return notebooks.map((notebook) => (
            <StyledContainer key={ notebook._id }>
                <TemplateUserHome 
                    id={ notebook._id }
                    colour={ notebook.colour } 
                    shape={ "notebook" }
                    onClick={ (e) => handleReadNotebook(e) }>
                    
                    <Strap strap={ notebook.strap } />
                    <Bookmark bookmark={ notebook.bookmark } />

                </TemplateUserHome>
                
                <UserHomeTitle
                    id={ notebook._id }
                    onClick={ (e) => handleReadNotebook(e) }>
                    { notebook.title }
                </UserHomeTitle>
            </StyledContainer>
        ));
    };

    // Handles the user clicking on a notebook
    const handleReadNotebook = ({ target }) => {
        // Store the clicked notebook's ID to open in 
        // the Read Notebook page
        localStorage.setItem("clickedNotebookID", target.id);

        // Opens the Read Notebook page
        setReadNotebook(prevState => !prevState);
    }

    // Handles the 'Add Notebook' button
    const handleAddNotebook = () => {
        // Opens the Create Note Template page
        setCreateNotebook(prevState => !prevState);
    }

    return (
        <StyledNotebooks>
            <SubheaderBar>
                <Subheading>Notebooks</Subheading>
            </SubheaderBar>

            <StyledGrid>
                <StyledContainer>
                    <StyledShape onClick={ handleAddNotebook }>
                        <img alt="click to add" src={ Images.Plus } />
                    </StyledShape>

                    <UserHomeTitle onClick={ handleAddNotebook }>Add Notebook</UserHomeTitle>
                </StyledContainer>

                {/* Displays notebooks if there are notebooks, 
                otherwise display nothing */}    
                { notebooks.length > 0 ? 
                    showNotebooks(searchedNotebooks) 
                : 
                    null 
                }
            </StyledGrid>

            {/* Change the URL to open the Create Notebook page */}
            { createNotebook ? <Navigate to='/create-notebook-template'/> : null }

            {/* Change the URL to open the Read Notebook page */}
            { readNotebook ? <Navigate to='/read-notebook'/> : null }

        </StyledNotebooks>
    );
}
 
export default Notebooks;