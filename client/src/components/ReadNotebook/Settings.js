// React Hooks
import { useState, useEffect, useRef } from "react";

// Promise-based HTTP client
import axios from "axios";

// URL Navigation
import { Navigate } from "react-router-dom";

// Image files
import Images from "../../images/Images";
// Styled Components
import { CloseButton } from "../Common/Close.style";
import { StyledSettingsFormRead, SettingContainer, AddedItemsGrid } from "../Common/Form.style";
import { SettingHeaderRead } from "../Common/Header.style";
import { FormHeadingModal, SettingHeading, NotebookNoteHeading} from "../Common/Heading.style";
import { ErrorMessages } from "../Common/Messages.style";
import { BlueButtonRegistration } from "../Common/Button.style";
import { List, ListOption, Options } from "../Common/List.style";
import { SearchInputList } from "../Common/Inputs.style";

// props passed from 'ReadNotebook.js'
const Settings = ({ handleSettings, notebook, notes }) => {

    // Sends user to the User Home page when true
    const [home, setHome] = useState(false);

    // Delete notebook warning
    const [deleteCounter, setDeleteCounter] = useState(0);
    
    // Shows list of notes available when true
    const [showList, setShowList] = useState(false);
    // Holds list of notes after search result
    const [filteredNotes, setFilteredNotes] = useState([]);
    // Holds list of notes selected to add current note
    const [addedNotes, setAddedNotes] = useState([]);

    // Reference instantiation to get the search input value
    const searchRef = useRef(null);


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
            // Show or hide list of note
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

        // Add the note title and the image 
        // for deleting the note to the AddedItemsGrid
        setAddedNotes(prevState => 
            // Remove the note title component and its delete image
            prevState.filter(note => note.props.id.substring(24) === "img" ? 
                note.props.id.substring(0, 24) !== id.substring(0, 24) 
            :   
                note.props.id !== id.substring(0, 24) 
            // Re-render the other notes into the selected list
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

        // Get the note identifiers which will be added to the notebook
        var noteIDsAdded = addedNotes.map(note => note.props.id);

        // Remove the notes that do not match the title,
        // are already in the addedNotes list, and
        // is already in the notebook
        var filtered = notes.filter(note => 
            note.title.toLowerCase().startsWith(searchValue) 
            && 
            noteIDsAdded.indexOf(note._id) === -1 
            &&
            ! notebook.notes.includes(note._id)
        );

        // Set the option components to render
        setFilteredNotes(filtered.length ? 
            filtered.map(note => 
                // Return the note option component to render
                <ListOption
                    key={ note._id }
                    id={ note._id }
                    title={ note.title }
                    onMouseDown={ (e) => addNote(e) }>
                    { note.title }
                </ListOption>
            ) 
        : 
            // Return appropriate message when no notes are available
            <ListOption>
                { 
                    notes.filter((note) => 
                        !notebook.notes.includes(note._id)).length ? 
                            "No Notes Available!" 
                        : 
                            "No More Notes To Add"
                }
            </ListOption>
        );
    }

    // Add the notes selected to the current notebook in MongoDB
    const updateNotebooks = () => {

        // Gather data to send to the server
        const payload = {
            noteIDs: JSON.parse(localStorage.getItem("addedNoteIDs")),
            notebookID: notebook._id
        }

        // Save the notes selected to the current notebook in MongoDB
        axios.put('/notebook/updateNotebook', {
            data: payload
        }).then(() => {

            // Open the User Home page
            goHome();

        }).catch((err) => {
            console.log("ERROR in Settings - /updateNotebook", err);
        });
    }

    // Delete the current notebook from MongoDB
    const deleteNotebook = () => {

        // Delete the notebook if the user
        // clicks on the delete icon twice
        if(deleteCounter === 1) {

            // Gather the data to send to the server
            const payload = {
                userID: localStorage.getItem("userID"),
                notebook: localStorage.getItem("clickedNotebookID")
            }

            // Delete the notebook from MongoDB
            axios.delete('/notebook/deleteNotebook', {
                data: payload
            }).then(() => {

                // Hide the delete note warning
                setDeleteCounter(0);

                // Open the User Home page
                goHome();

            }).catch((err) => {
                console.log("ERROR in Settings - /deleteNotebook", err)
            });

        } else {
            // Display the delete note warning
            setDeleteCounter((prevState) => prevState + 1);
        }
    }

    // Open the User Home page
    const goHome = () => {
        setHome((prevState) => !prevState);
    }

    return (
        <StyledSettingsFormRead onSubmit={ (e) => e.preventDefault() }>

            {/* Close the settings modal and hide the delete note warning*/}
            <CloseButton onMouseDown={ (e) => { handleSettings(e); setDeleteCounter(0); } }/>

            <FormHeadingModal>Notebook Settings</FormHeadingModal>

            <SettingHeaderRead>
                <SettingHeading>Select Notes</SettingHeading>        
            </SettingHeaderRead>

            <SettingContainer>

                <List showList={ showList }>

                    <label>
                        <SearchInputList
                            ref={ searchRef }
                            showList={ showList } 
                            onChange={ (e) => handleChange(e) }
                            onFocus={ (e) => handleChange(e) }
                            onBlur={ (e) => handleChange(e) }
                            name="note"
                            type="text"
                            placeholder="Search Notes"> 
                        </SearchInputList>
                    </label>

                    {/* Display the list of notebooks available when true */}
                    { showList ? 
                        <Options>
                            { filteredNotes }
                        </Options> 
                    : 
                        null
                    }

                    {/* Display the list of notes selected when there is
                    at least one note selected */}
                    { addedNotes.length ? 
                        <SettingHeading>Notes to be Added to This Notebook:</SettingHeading>
                    : 
                        null
                    }
                    { addedNotes.length ? 
                        <AddedItemsGrid>

                            { addedNotes }

                        </AddedItemsGrid> 
                    : 
                        null 
                    }

                </List>

            </SettingContainer>

            <BlueButtonRegistration 
                type="button"
                onClick={ () => { updateNotebooks(); displayFilteredList(''); } }>
                Add Notes to Notebook
            </BlueButtonRegistration>

            <SettingHeaderRead>
                <SettingHeading>Delete Notebook</SettingHeading>
                <img onClick={ deleteNotebook } src={ Images.Delete } alt="Delete Note"></img>          
            </SettingHeaderRead>
            { deleteCounter >= 1
            &&
                <ErrorMessages>
                    Click the Delete Icon Again If You're Sure You Want To Delete This Notebook!
                </ErrorMessages>
            }

            {/* Change the URL to open the User Home page */}
            { home ? <Navigate to="/user-home" /> : null }

        </StyledSettingsFormRead>
    );
}
 
export default Settings;