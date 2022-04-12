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
import { SettingContainer, StyledSettingsFormRead, AddedItemsGrid } from "../Common/Form.style";
import { SettingHeaderRead } from "../Common/Header.style";
import { FormHeadingModal, SettingHeading, NotebookNoteHeading } from "../Common/Heading.style";
import { ErrorMessages } from "../Common/Messages.style"
import { List, ListOption, Options } from "../Common/List.style";
import { SearchInputList } from "../Common/Inputs.style";
import { BlueButtonRegistration } from "../Common/Button.style"

// props passed from 'EditNote.js' or 'ReadNote.js'
const Settings = ({ handleSettings, notebooks, note, setNotebooks }) => {

    // Sends user to the User Home page when true
    const [home, setHome] = useState(false);

    // Delete note warning
    const [deleteCounter, setDeleteCounter] = useState(0);

    // Shows list of notebooks available when true
    const [showList, setShowList] = useState(false);
    // Holds list of notebooks after search result
    const [filteredNotebooks, setFilteredNotebooks] = useState([]);
    // Holds list of notebooks selected to add current note
    const [addedNotebooks, setAddedNotebooks] = useState([]);

    // Reference instantiation to get the search input value
    const searchRef = useRef(null);


    // Runs when a new notebook is added to addedNotebooks
    useEffect(() => {
        // Get the identifiers of each notebook in the list
        var addedNotebooksIDs = addedNotebooks.filter(notebook => notebook.props.id.substring(24) !== "img")
            .map(notebook => notebook.props.id);
        
        // Stores list of notebook identifiers
        localStorage.setItem("addedNotebookIDs", JSON.stringify(addedNotebooksIDs));
    }, [addedNotebooks]);

    
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

        // Filter the notebooks list using the search input value
        displayFilteredList(value);
    }

    // Add a notebook to the selected list
    const addNotebook = ({ target }) => {
        // Get the id and title attributes from 
        // the element that triggered the event
        const { id, title } = target;

        // Add the notebook title component and the image 
        // for deleting the notebook to the AddedItemsGrid
        setAddedNotebooks(prevState => [
            ...prevState,
            <NotebookNoteHeading 
                key={ id } 
                id={ id }>
                { title }
            </NotebookNoteHeading>,
            <img 
                key={ id + "img" } 
                id={ id + "img" } 
                onClick={ (e) => deleteAddedNotebook(e) } 
                src={ Images.Delete } 
                alt="Delete Note" 
            />
        ]);
    }

    // Delete a notebook in the selected list
    const deleteAddedNotebook = ({ target }) => {
        // Get the id attribute from 
        // the element that triggered the event
        const { id } = target;

        // Add the notebook title and the image 
        // for deleting the notebook to the AddedItemsGrid
        setAddedNotebooks(prevState => 
            // Remove the notebook title component and its delete image
            prevState.filter(notebook => notebook.props.id.substring(24) === "img" ? 
                notebook.props.id.substring(0, 24) !== id.substring(0, 24) 
            :   
                notebook.props.id !== id.substring(0, 24) 
            // Re-render the other notebooks into the selected list
            ).map(component =>
                component
            )
        );

        // Filter the notebooks list using the search input value
        displayFilteredList(searchRef.current.value);
    }

    // Filter the list of notebooks available
    const displayFilteredList = (value) => {

        var searchValue = value.toLowerCase();

        // Get the notebook identifiers of which the note will be added
        var notebookIDsAdded = addedNotebooks.map(notebook => notebook.props.id);

        // Remove the notebooks that do not match the title,
        // are already in the addedNotebooks list, and
        // already contains the current note
        var filtered = notebooks.filter(notebook => 
            notebook.title.toLowerCase().startsWith(searchValue) 
            && 
            notebookIDsAdded.indexOf(notebook._id) === -1 
            &&
            ! notebook.notes.includes(note._id)
        );

        // Set the option components to render
        setFilteredNotebooks(filtered.length ? 
            filtered.map(notebook => 
                // Return the notebook option component to render
                <ListOption
                    key={ notebook._id }
                    id={ notebook._id }
                    title={ notebook.title }
                    onMouseDown={ (e) => addNotebook(e) }>
                    { notebook.title }
                </ListOption>
            ) 
        : 
            // Return appropriate message when no notebooks are available
            <ListOption> { 
                notebooks.filter(notebook => ! notebook.notes.includes(note._id)).length ? 
                    "No Notebooks Available!" 
                : 
                    "Note Added to All"
            } </ListOption>
        );
    }

    // Add the current note to the notebooks selected in MongoDB
    const updateNotebooks = () => {

        // Gather data to send to the server
        const payload = {
            notebookIDs: JSON.parse(localStorage.getItem("addedNotebookIDs")),
            noteID: note._id
        }

        // Save the note to each notebook selected in MongoDB
        axios.put('/notebook/saveNote', {
            data: payload
        }).then(() => {
            
            // Open the User Home page
            goHome();

        }).catch((err) => {
            console.log("ERROR in Settings - /notebook/saveNotebook", err);
        });
    }

    // Delete the current note from MongoDB
    const deleteNote = () => {

        // Delete the note if the user
        // clicks on the delete icon twice
        if(deleteCounter === 1) {

            // Gather the data to send to the server
            const payload = {
                userID: localStorage.getItem("userID"),
                note: localStorage.getItem("clickedNoteID")
            }

            // Delete the note from MongoDB
            axios.delete('/note/deleteNote', {
                data: payload
            }).then(() => {

                // Hide the delete note warning
                setDeleteCounter(0);
                
                // Open the User Home page
                goHome();

            }).catch((err) => {
                console.log("ERROR in Settings - /note/deleteNote", err)
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
            <CloseButton onMouseDown={ (e) => { handleSettings(e); setDeleteCounter(0); } }></CloseButton>

            <FormHeadingModal>Note Settings</FormHeadingModal>

            <SettingHeaderRead>
                <SettingHeading>Select Notebooks</SettingHeading>        
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
                            name="notebook"
                            type="text"
                            placeholder="Search for Notebooks"> 
                        </SearchInputList>
                    </label>

                    {/* Display the list of notebooks available when true */}
                    { showList ? 
                        <Options>
                            { filteredNotebooks }
                        </Options> 
                    : 
                        null 
                    }

                    {/* Display the list of notebooks selected when there is
                    at least one notebook selected */}
                    { addedNotebooks.length ? 
                        <SettingHeading>Notebooks This Note will be Added To:</SettingHeading>
                    : 
                        null
                    }
                    { addedNotebooks.length ? 
                        <AddedItemsGrid>

                            { addedNotebooks }

                        </AddedItemsGrid> 
                    : 
                        null 
                    }
                    
                </List>

            </SettingContainer>

            <BlueButtonRegistration 
                type="button"
                onClick={ () => { updateNotebooks(); displayFilteredList(''); } }>
                Add Note to Notebooks
            </BlueButtonRegistration>

            <SettingHeaderRead>

                <SettingHeading>Delete Note</SettingHeading>  
                
                <img onClick={ deleteNote } src={ Images.Delete } alt="Delete Note"></img>      

            </SettingHeaderRead>
            {   deleteCounter >= 1
            &&
                <ErrorMessages>
                    Click the Delete Icon Again If You're Sure You Want To Delete This Note!
                </ErrorMessages>
            }

            {/* Change the URL to open the User Home page */}
            { home ? <Navigate to="/user-home" /> : null }

        </StyledSettingsFormRead>
    );
}
 
export default Settings;