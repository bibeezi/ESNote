// React Hooks
import { useEffect, useState, useRef } from "react";

// Promise-based HTTP client
import axios from "axios";

// Image files
import Images from "../../images/Images";
// Styled Components
import { SettingsGrid, SettingContainer, AddedItemsGrid } from "../Common/Form.style";
import { SettingHeader } from "../Common/Header.style";
import { CheckSettingHeading, NotebookNoteHeading } from "../Common/Heading.style";
import { SearchInputList } from "../Common/Inputs.style";
import { CreateNotebookOptions } from "../Common/List.style";
import { List, CreateNotebookListOption } from "../Common/List.style";

const AddNote = () => {

    // Holds the user's notes
    const [notes, setNotes] = useState([]);

    // Shows list of notes available when true
    const [showList, setShowList] = useState(false);
    // Holds list of notes after search result
    const [filteredNotes, setFilteredNotes] = useState([]);
    // Holds list of notebooks selected to add current note
    const [addedNotes, setAddedNotes] = useState([]);

    // Reference instantiation to get the search input value
    const searchRef = useRef(null);

    
    // Runs when rendered
    useEffect(() => {

        // Gather data to send to the server
        const payload = {
            userID: localStorage.getItem("userID")
        };

        // Get the user's notes from MongoDB
        axios.get('/note/getNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            // Set the received notes into the notes state
            res.data.msg !== "Notes Not Found" && setNotes(res.data);
        })
        .catch((error) => {
            console.log("ERROR in AddNote - /getNotes", error);
        });

    }, [])

    // Runs when a new note is added to addedNotes
    useEffect(() => {
        // Get the identifiers of each note in the list
        var addedNoteIDs = addedNotes.filter(note => note.props.id.substring(24) !== "img")
            .map(note => note.props.id);
        
        // Stores list of note identifiers
        localStorage.setItem("addedNoteIDs", JSON.stringify(addedNoteIDs));
    }, [addedNotes]);


    // Handles the events on the search input
    const handleChange = (event) => {
        // Get the value and event name attributes from 
        // the element that triggered the event
        const { value } = event.target;
        const reactName = event._reactName;

        // Search the corresponding code block to run depending on the
        // name of the event that triggered the event
        switch(reactName) {
            // Show or hide list of notebooks
            case "onBlur":
                setShowList(false);
                break;
            default:
                setShowList(true);
                break;
        }

        // Filter the notes list using the search input value
        displayFilteredList(value);
    }

    // Add a note to the selected list
    const addNote = ({ target }) => {
        // Get the id and title attributes from 
        // the element that triggered the event
        const { id, title } = target;

        // Add the note title component and the image 
        // for deleting the note to the AddedItemsGrid
        setAddedNotes(prevState => [
            ...prevState,
            <NotebookNoteHeading 
                key={ id } 
                id={ id }>
                { title }
            </NotebookNoteHeading>,
            <img 
                key={ id + "img" } 
                id={ id + "img" } 
                onClick={ (e) => deleteAddedNote(e) } 
                src={ Images.Delete } 
                alt="Delete Note" 
            />
        ]);
    }

    // Delete a note in the selected list
    const deleteAddedNote = ({ target }) => {
        // Get the id attribute from 
        // the element that triggered the event
        const { id } = target;

        // Add the notebook title and the image 
        // for deleting the notebook to the AddedItemsGrid
        setAddedNotes(prevState => 
            // Remove the notebook title component and its delete image
            prevState.filter(note => note.props.id.substring(24) === "img" ? 
                note.props.id.substring(0, 24) !== id.substring(0, 24) 
            :   
                note.props.id !== id.substring(0, 24) 
            // Re-render the other notebooks into the selected list
            ).map(component =>
                component
            )
        );

        // Filter the notes list using the search input value
        displayFilteredList(searchRef.current.value);
    }

    // Filter the list of notes available
    const displayFilteredList = (value) => {

        var searchValue = value.toLowerCase();

        // Get the note identifiers of which the note will be added
        var noteIDsAdded = addedNotes.map(note => note.props.id);

        // Remove the notes that do not match the title,
        // and that are already in the addedNotes list
        var filtered = notes.filter(note => 
            note.title.toLowerCase().startsWith(searchValue) 
            && 
            noteIDsAdded.indexOf(note._id) === -1
        );
        
        // Set the option components to render
        setFilteredNotes(filtered.length ? 
            filtered.map(note => 
                // Return the note option component to render
                <CreateNotebookListOption 
                    key={ note._id }
                    id={ note._id }
                    title={ note.title }
                    onMouseDown={ (e) => addNote(e) }>
                    { note.title }
                </CreateNotebookListOption>
            ) : 
                // Return appropriate message when no notes are available
                <CreateNotebookListOption>No Notes Found!</CreateNotebookListOption>
        );
    }

    return (
        <>
        <SettingHeader>
            <CheckSettingHeading>Select Notes For This Notebook</CheckSettingHeading>
        </SettingHeader>

        <SettingsGrid>

            <SettingContainer>

                <List showList={ showList } page={ "CreateNotebook"}>

                    <label>
                        <SearchInputList
                            page={ "CreateNotebook"}
                            ref={ searchRef }
                            showList={ showList } 
                            onChange={ (e) => handleChange(e) }
                            onFocus={ (e) => handleChange(e) }
                            // onBlur={ (e) => handleChange(e) }
                            name="note"
                            type="text"
                            placeholder="Search for Notes"> 
                        </SearchInputList>
                    </label>

                    {/* Display the list of notes available when true */}
                    { showList ? 
                        <CreateNotebookOptions>
                            { filteredNotes }
                        </CreateNotebookOptions> 
                    : 
                        null 
                    }
                    
                    { addedNotes.length ? 
                        <CheckSettingHeading>Notes to be Added in This Notebook:</CheckSettingHeading> 
                    :
                        null
                    }  
                    {/* Display the list of notes selected when there is
                        at least one note selected */}
                    { addedNotes.length ? 
                        <AddedItemsGrid>

                            { addedNotes }

                        </AddedItemsGrid> 

                    : 
                        null 
                    }

                </List>

            </SettingContainer>

        </SettingsGrid>
        </>
    );
}
 
export default AddNote;