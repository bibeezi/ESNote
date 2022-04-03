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
    const [notes, setNotes] = useState([]);
    const [openSettings, setOpenSettings] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            getNotebook();
        }, 50);
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

            getNotes(res.data.notes);
        })
        .catch((error) => {
            console.log("ERROR in ReadNotebook - /getNotebook", error);
        });
    }

    const getNotes = (noteIDs) => {

        const payload = {
            noteIDs: noteIDs
        };

        axios.get('/note/getNotebookNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNotes(res.data);
        })
        .catch((error) => {
            console.log("ERROR in ReadNotebook - /getNotebookNotes", error);
        });
    };

    const showNotes = (notes) => {
        return notes.map((note) => (
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

            <ReadNotebookContent notebookLength={ notes.length }>
                { showNotes(notes) }
            </ReadNotebookContent>

            { openSettings && 
            <Modal onClick={ (e) => handleSettings(e) }>
                <ReadSettingsFormContainer onClick={ (e) => handleSettings(e) }>
                    <Settings
                        handleSettings={ handleSettings }>
                    </Settings>
                </ReadSettingsFormContainer>
            </Modal>}
        </div>
    );
}
 
export default ReadNotebook;