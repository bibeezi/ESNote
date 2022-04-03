
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Note from "./Note";
import Settings from "./Settings";
import { ReadNoteContent } from "../Common/Content.style";
import { TitleContainer } from "../Common/Header.style";
import { ReadNoteTitle } from "../Common/Heading.style";
import { Modal } from "../Common/Modal.style";
import { ReadSettingsFormContainer } from "../Common/Form.style";

const ReadNote = () => {

    const [note, setNote] = useState({title: ''});
    const [openSettings, setOpenSettings] = useState(false);
    const [notebooks, setNotebooks] = useState([]);


    useEffect(() => {
        showTitle(note);
        getNotebooks();
    }, [note])

    
    const showTitle = (note) => {
        return <ReadNoteTitle>{ note.title }</ReadNoteTitle>
    }

    const handleSettings = (event) => {
        event.preventDefault();

        setOpenSettings(prevState => !prevState);
    }

    const getNotebooks = () => {

        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/notebook/getNotebooks', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            res.data.msg !== "Notebooks Not Found" && setNotebooks(res.data);
        })
        .catch((error) => {
            console.log("ERROR in ReadNote - /notebook/getNotebooks", error);
        });
    };

    return (
        <div>
            <Header note={ note } handleSettings={ handleSettings }/>

            <ReadNoteContent>
                <div></div>
                
                <TitleContainer>
                    { showTitle(note) }
                </TitleContainer>

                <Note 
                    note={ note }
                    setNote={ setNote }>
                </Note>
            </ReadNoteContent>

            { openSettings && 
            <Modal onClick={ (e) => handleSettings(e) }>
                <ReadSettingsFormContainer onClick={ (e) => handleSettings(e) }>
                    <Settings
                        handleSettings={ handleSettings }
                        note={ note }
                        notebooks={ notebooks }
                        getNotebooks={ getNotebooks }>
                    </Settings>
                </ReadSettingsFormContainer>
            </Modal>}
        </div>
    );
}
 
export default ReadNote;