import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Images from "../../images/Images";
import { CloseButton } from "../Common/Close.style";
import { StyledNoteSettingsForm } from "../Common/Form.style";
import { SettingHeaderRead } from "../Common/Header.style";
import { FormHeadingModal, SettingHeading } from "../Common/Heading.style";
import { ErrorMessages } from "../Common/Messages.style"

const NoteSettings = ({ handleSettings }) => {

    const [home, setHome] = useState(false);
    const [deleteCounter, setDeleteCounter] = useState(0);

    const deleteNote = () => {
        if(deleteCounter === 1) {
            const payload = {
                userID: localStorage.getItem("userID"),
                note: localStorage.getItem("clickedNoteID")
            }

            axios.delete('/note/deleteNote', {
                data: payload
            }).then((res) => {
                goHome();
            }).catch((err) => {
                console.log("ERROR in NoteSettings - /deleteNote", err)
            });

            setDeleteCounter(0);
        } else {
            setDeleteCounter((prevState) => prevState + 1);
        }
    }

    const goHome = () => {
        setHome((prevState) => !prevState);
    }

    return (
        <StyledNoteSettingsForm>
            <CloseButton onMouseDown={ (e) => { handleSettings(e); setDeleteCounter(0); } }></CloseButton>
            <FormHeadingModal>Note Settings</FormHeadingModal>

            <SettingHeaderRead>
                <SettingHeading>Delete Note</SettingHeading>  
                <img onClick={ deleteNote } src={ Images.Delete } alt="Delete Note"></img>          
            </SettingHeaderRead>
            <ErrorMessages active={ deleteCounter !== 1 ? false : true }>
                { deleteCounter === 1 ? "Click the Delete Icon Again If You're Sure You Want To Delete This Note!" : null }
            </ErrorMessages>

            { home ? <Navigate to="/user-home" /> : null }
        </StyledNoteSettingsForm>
    );
}
 
export default NoteSettings;