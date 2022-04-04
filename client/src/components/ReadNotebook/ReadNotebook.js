import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Notes from "./Notes";
import Settings from "./Settings";
import { ReadNotebookContent } from "../Common/Content.style";
import { Modal } from "../Common/Modal.style";
import { ReadSettingsFormContainer } from "../Common/Form.style";

const ReadNotebook = () => {

    const [notebook, setNotebook] = useState({});
    const [notebookNotes, setNotebookNotes] = useState([]);
    const [allNotes, setAllNotes] = useState([]);
    const [openSettings, setOpenSettings] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            getNotebook();
        }, 100);

        getAllNotes();
    }, []);

    const getNotebook = () => {

        const payload = {
            notebookID: localStorage.getItem("clickedNotebookID")
        };

        axios.get('/notebook/getNotebook', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNotebook(res.data);

            getNotebookNotes(res.data.notes);
        })
        .catch((error) => {
            console.log("ERROR in ReadNotebook - /getNotebook", error);
        });
    }

    const getNotebookNotes = (noteIDs) => {

        const payload = {
            noteIDs: noteIDs
        };

        axios.get('/note/getNotebookNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNotebookNotes(res.data);
        })
        .catch((error) => {
            console.log("ERROR in ReadNotebook - /getNotebookNotes", error);
        });
    };

    const getAllNotes = () => {
        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/note/getNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setAllNotes(res.data);
        })
        .catch((error) => {
            console.log("ERROR in ReadNotebook - /getNotes", error);
        });
    }

    const showNotes = (notebookNotes) => {
        return notebookNotes.map((note) => (
            <Notes key={ note._id } note={ note } />
        ));
    };

    const handleSettings = (event) => {
        event.preventDefault();

        setOpenSettings(prevState => !prevState);
    }

    return (
        <div>
            <Header notebook={ notebook } handleSettings={ handleSettings }/>

            <ReadNotebookContent notebookLength={ notebookNotes.length }>
                { showNotes(notebookNotes) }
            </ReadNotebookContent>

            { openSettings && 
            <Modal onClick={ (e) => handleSettings(e) }>
                <ReadSettingsFormContainer onClick={ (e) => handleSettings(e) }>
                    <Settings
                        handleSettings={ handleSettings }
                        notebook={ notebook }
                        notes={ allNotes }
                        getNotes={ getAllNotes }>
                    </Settings>
                </ReadSettingsFormContainer>
            </Modal>}
        </div>
    );
}
 
export default ReadNotebook;