// React Hooks
import { useEffect, useState } from "react";

// Promise-based HTTP client
import axios from "axios";

// Child Component
import Header from "./Header";
import Note from "./Note";
import Settings from "./Settings";
// Styled Components
import { ReadNoteContent } from "../Common/Content.style";
import { TitleContainer } from "../Common/Header.style";
import { ReadNoteTitle } from "../Common/Heading.style";
import { Modal } from "../Common/Modal.style";
import { ReadSettingsFormContainer } from "../Common/Form.style";

const ReadNote = () => {

    // The displayed note's details from the database
    const [note, setNote] = useState({title: ''});

    // Opens the settings modal when true
    const [openSettings, setOpenSettings] = useState(false);
    // The user's notebooks for the settings
    const [notebooks, setNotebooks] = useState([]);


    // Runs when note is received
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
            console.log("ERROR in ReadNote - /notebook/getNotebooks", error);
        });

    }, [note]);

    // Opens the settings modal
    const handleSettings = (event) => {
        // Stops the form from refreshing the page on render
        event.preventDefault();

        setOpenSettings(prevState => !prevState);
    }

    return (
        <div>
            <Header note={ note } handleSettings={ handleSettings }/>

            <ReadNoteContent>

                <div></div>
                
                <TitleContainer>
                    <ReadNoteTitle>{ note.title }</ReadNoteTitle>
                </TitleContainer>

                <Note 
                    note={ note }
                    setNote={ setNote }>
                </Note>

            </ReadNoteContent>

            {/* Opens settings modal when true */}
            { openSettings 
            && 
                <Modal onClick={ (e) => handleSettings(e) }>

                    <ReadSettingsFormContainer onClick={ (e) => handleSettings(e) }>

                        <Settings
                            handleSettings={ handleSettings }
                            note={ note }
                            notebooks={ notebooks }>
                        </Settings>

                    </ReadSettingsFormContainer>

                </Modal>
            }
        </div>
    );
}
 
export default ReadNote;