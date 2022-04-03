
import { useEffect, useState } from "react";

import Header from "./Header";
import Note from "./Note";
import NoteSettings from "./NoteSettings";
import { ReadNoteContent } from "../Common/Content.style";
import { TitleContainer } from "../Common/Header.style";
import { ReadNoteTitle } from "../Common/Heading.style";
import { Modal } from "../Common/Modal.style";
import { ReadSettingsFormContainer } from "../Common/Form.style";

const ReadNote = () => {

    const [note, setNote] = useState({title: ''});
    const [openSettings, setOpenSettings] = useState(false);

    useEffect(() => {
        showTitle(note);
    }, [note])

    
    const showTitle = (note) => {
        return <ReadNoteTitle>{ note.title }</ReadNoteTitle>
    }

    const handleSettings = (event) => {
        event.preventDefault();

        setOpenSettings(prevState => !prevState);
    }

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
                    <NoteSettings
                        handleSettings={ handleSettings }>
                    </NoteSettings>
                </ReadSettingsFormContainer>
            </Modal>}
        </div>
    );
}
 
export default ReadNote;