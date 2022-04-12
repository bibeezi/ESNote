// React Hooks
import { useEffect, useState } from "react";

// Promise-based HTTP client
import axios from "axios";

// Child Component
import Header from "./Header";
import Notes from "./Notes";
import Settings from "./Settings";
// Styled Components
import { ReadNotebookContent } from "../Common/Content.style";
import { Modal } from "../Common/Modal.style";
import { ReadSettingsFormContainer } from "../Common/Form.style";

const ReadNotebook = () => {

    // Store all user notebooks and its notes' details
    const [notebook, setNotebook] = useState({});
    const [notebookNotes, setNotebookNotes] = useState([]);

    // Store the user's notes
    const [notes, setNotes] = useState([]);

    // Opens the settings modal when true
    const [openSettings, setOpenSettings] = useState(false);


    // Runs when rendered
    useEffect(() => {

        // Wait for 50 milliseconds
        setTimeout(() => {

            // Gather data to send to the server
            const payload = {
                notebookID: localStorage.getItem("clickedNotebookID")
            };
    
            // Get the notebook's details from MongoDB
            axios.get('/notebook/getNotebook', {
                params: {
                    data: payload
                }
            })
            .then((res) => {

                // Stores the notebook received into notebook state
                res.data.msg === "Notebook Found" && setNotebook(res.data.notebook);

                // Get the received notebook's notes' details
                getNotebookNotes(res.data.notebook.notes);

            })
            .catch((error) => {
                console.log("ERROR in ReadNotebook - /notebook/getNotebook", error);
            });

        }, 50);
        
        // Gather data to send to the server
        const payload = {
            userID: localStorage.getItem("userID")
        };

        // Get the user's notes from MongoDB
        axios.get('/note/getNotes', {
            params: {
                data: payload
            }
        }).then((res) => {

            // Store the notes received into notes state
            res.data.msg !== "Notes Not Found" && setNotes(res.data);

        }).catch((error) => {
            console.log("ERROR in ReadNotebook - /note/getNotes", error);
        });
    }, []);


    const getNotebookNotes = (noteIDs) => {

        // Gather data to send to the server
        const payload = {
            noteIDs: noteIDs
        };

        // Get the notebook's notes' details from MongoDB
        axios.get('/note/getNotebookNotes', {
            params: {
                data: payload
            }
        }).then((res) => {

            // Stores the notebook's notes received into notebookNotes state
            res.data.msg === "Notebook's Notes Found" && setNotebookNotes(res.data.notes);

        }).catch((err) => {
            console.log("ERROR in ReadNotebook - /getNotebookNotes", err);
        });
    };

    // Displays the notes onto the ReadNotebookContent component
    const showNotes = (notebookNotes) => {
        // Return the Notes components to render
        return notebookNotes.map((note) => (
            <Notes key={ note._id } note={ note } />
        ));
    };

    // Opens the settings modal
    const handleSettings = (event) => {
        // Stops the form from refreshing the page on render
        event.preventDefault();

        setOpenSettings(prevState => !prevState);
    }

    return (
        <div>
            <Header notebook={ notebook } handleSettings={ handleSettings }/>

            <ReadNotebookContent notebookLength={ notebookNotes.length }>

                {/* Display notebook's notes */}
                { showNotes(notebookNotes) }

            </ReadNotebookContent>

            {/* Opens settings modal when true */}
            {   openSettings
            && 
                <Modal onClick={ (e) => handleSettings(e) }>

                    <ReadSettingsFormContainer onClick={ (e) => handleSettings(e) }>

                        <Settings
                            handleSettings={ handleSettings }
                            notebook={ notebook }
                            notes={ notes }>
                        </Settings>

                    </ReadSettingsFormContainer>

                </Modal>
            }
        </div>
    );
}
 
export default ReadNotebook;