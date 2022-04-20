// React Hooks
import { useEffect, useState, useRef } from "react";

// Promise-based HTTP client
import axios from "axios";

// Child Components
import Header from "./Header";
import Note from "../ReadNote/Note";
import Settings from "../ReadNote/Settings";
// Styled Components
import { EditTitleContainer } from "../Common/Header.style";
import { EditNoteInput } from "../Common/Inputs.style";
import { EditNoteContent } from "../Common/Content.style";
import { SaveContainer } from "./EditNote.style";
import { SavedMessages } from "../Common/Messages.style";
import { SaveButton } from "../Common/Button.style";
import { Modal } from "../Common/Modal.style";
import { ReadSettingsFormContainer } from "../Common/Form.style";

const EditNote = () => {

    // Amount of characters before saving the note
    const CHAR_SAVE = 150;
    const [charCount, setCharCount] = useState(0);

    // The displayed note's details from the database
    const [note, setNote] = useState({title: ''});

    // Shows the saved message when true
    const [savedMessage, setSavedMessage] = useState(false);
    
    // Opens the settings modal when true
    const [openSettings, setOpenSettings] = useState(false);
    // The user's notebooks for the settings
    const [notebooks, setNotebooks] = useState([]);

    // Reference instantiations to get the input and textareas DOM elements
    const inputRef = useRef(null);
    const textareaRef = useRef(null);


    // Runs once when rendered
    useEffect(() => {

        // Gather data to send to the server
        const payload = {
            userID: localStorage.getItem("userID")
        };

        // Get the user's notebooks from MongoDB
        axios.get('/notebook/getNotebooks', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            // Save the notebooks received into 'notebooks' state
            res.data.msg !== "Notebooks Not Found" && setNotebooks(res.data);
        })
        .catch((error) => {
            console.log("ERROR in EditNote - /notebook/getNotebooks", error);
        });

        // Wait for two seconds before saving note
        let saveOnLoad = setTimeout(() => {

            // Get title input and note textarea's container elements
            const title = inputRef.current;
            const textareas = textareaRef.current?.childNodes;

            // For each textarea in the note template, get its id and value
            var newBody = Array.from(textareas).map((child) => {
                return { sectionID: child.name, content: child.value }
            });

            // Save the note to MongoDB
            axios.put('/note/saveNote', {
                noteBodies: newBody,
                noteTitle: title.value,
                noteTemplate: note.template,
                noteID: note._id
            })
            .then((res) => { 

                // Display the saved message
                res.data.msg === "Note Saved" && setSavedMessage(true);

            })
            .catch((err) => {
                console.log("ERROR in EditNote - /note/saveNote", err);
            });

        }, 2000);

        // Cleanup timeout if not necessary
        return () => {
            clearTimeout(saveOnLoad);
        }

    }, [note._id, note.template]);

    // Runs when saved message is displayed
    useEffect(() => {

        // Wait for three seconds
        let savedMessage = setTimeout(() => {

            // Hide the saved message
            setSavedMessage(false);
            
        }, 5000);

        // Cleanup timeout if not necessary
        return () => {
            clearTimeout(savedMessage);
        }

    }, [savedMessage]);


    // Handles the user typing into the title input or textareas
    const handleChange = () => {

        // Save ONLY when the character count is 150
        // and the element is not the title
        if(charCount === CHAR_SAVE) {

            // Save note
            handleSave("count");

            // Reset the character count to 0
            setCharCount(0);
        }
        else {
            // Increment the character count
            setCharCount(charCount + 1);
        }
    }

    // Handles each kind of save available
    const handleSave = (type) => {

        // Get title input and note textarea's container elements
        const title = inputRef.current;
        const textareas = textareaRef.current?.childNodes;

        // For each textarea in the note template, get its id and value
        var newBody = Array.from(textareas).map((child) => {
            return { sectionID: child.name, content: child.value }
        });

        // Save the note to MongoDB
        axios.put('/note/saveNote', {
            noteBodies: newBody,
            noteTitle: title.value,
            noteTemplate: note.template,
            noteID: note._id
        })
        .then(() => {

            // Search the corresponding code block to run 
            // depending on the type of action needed
            switch(type) {
                // Display the saved message
                // or resets the character count to 0
                case "button":
                    setSavedMessage(true);
                    break;

                case "count": {
                    setCharCount(0);
                    setSavedMessage(true);
                    break;

                }
                default:
                    break;
            }

        })
        .catch((err) => {
            console.log("ERROR in EditNote - /note/saveNote", err);
        });
    }

    // Opens the settings modal
    const handleSettings = (event) => {
        // Stops the form from refreshing the page on render
        event.preventDefault();

        setOpenSettings(prevState => !prevState);
    }

    return (
        <div>
            <Header 
                handleSettings={ handleSettings }
                handleSave={ handleSave }
                note={ note }>
            </Header>

            <EditNoteContent>
                <EditTitleContainer>

                    <label>Title:</label>

                    <EditNoteInput 
                        ref={ inputRef }
                        name="title"
                        type="text"
                        placeholder="Title"
                        defaultValue={ note.title }
                        onChange={ handleChange }> 
                    </EditNoteInput>

                </EditTitleContainer>

                <Note
                    textareaRef={ textareaRef }
                    note={ note }
                    setNote={ setNote }
                    handleChange={ handleChange }
                    page={ "Edit Note" }>
                </Note>

                <SaveContainer>
                    {/* Show the saved message when true */}
                    {  savedMessage ? 
                        <SavedMessages>Saved!</SavedMessages> 
                    : 
                        <SavedMessages></SavedMessages>
                    }

                    <SaveButton onClick={ () => handleSave("button") }>Save</SaveButton>
                </SaveContainer>

                {/* Show the Settings modal when true */}
                {   openSettings 
                && 
                    <Modal onClick={ (e) => handleSettings(e) }>

                        <ReadSettingsFormContainer onClick={ (e) => handleSettings(e) }>

                            <Settings
                                handleSettings={ handleSettings }
                                note={ note }
                                notebooks={ notebooks }
                                setNotebooks={ setNotebooks }>
                            </Settings>
                            
                        </ReadSettingsFormContainer>

                    </Modal>
                }
            </EditNoteContent>
        </div>
    );
}
 
export default EditNote;