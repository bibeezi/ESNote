
import { useEffect, useState } from "react";

import Header from "./Header";
import Note from "./Note";
import NoteSettings from "./NoteSettings";
import { ReadNoteContent } from "../Common/Content.style";
import { TitleContainer } from "../Common/Header.style";
import { ReadNoteTitle } from "../Common/Heading.style";
import { Modal } from "../Common/Modal.style";
import { NoteSettingsFormContainer } from "../Common/Form.style";

const ReadNote = () => {

    const [note, setNote] = useState({title: ''});
    const [openSettings, setOpenSettings] = useState(false);

    useEffect(() => {
        showTitle(note);
    }, [note])

    
    const showTitle = (note) => {
        return <ReadNoteTitle>{ note.title }</ReadNoteTitle>
    }

    const handleSettings = () => {
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
            <Modal onClick={ handleSettings }>
                <NoteSettingsFormContainer>
                    <NoteSettings
                        handleSettings={ handleSettings }>
                    </NoteSettings>
                </NoteSettingsFormContainer>
            </Modal>}
        </div>
    );
}
 
export default ReadNote;