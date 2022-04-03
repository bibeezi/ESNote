import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import Images from "../../images/Images";
import { CloseButton } from "../Common/Close.style";
import { StyledSettingsFormRead } from "../Common/Form.style";
import { SettingHeaderRead } from "../Common/Header.style";
import { FormHeadingModal, SettingHeading } from "../Common/Heading.style";
import { ErrorMessages } from "../Common/Messages.style";

const Settings = ({ handleSettings }) => {

    const [home, setHome] = useState(false);
    const [deleteCounter, setDeleteCounter] = useState(0);

    const deleteNotebook = () => {
        if(deleteCounter === 1) {
            const payload = {
                userID: localStorage.getItem("userID"),
                notebook: localStorage.getItem("clickedNotebookID")
            }

            axios.delete('/notebook/deleteNotebook', {
                data: payload
            }).then((res) => {
                goHome();
            }).catch((err) => {
                console.log("ERROR in Settings - /deleteNotebook", err)
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
        <StyledSettingsFormRead>
            <CloseButton onMouseDown={ (e) => { handleSettings(e); setDeleteCounter(0); } }/>
            <FormHeadingModal>Notebook Settings</FormHeadingModal>

            <SettingHeaderRead>
                <SettingHeading>Delete Notebook</SettingHeading>
                <img onClick={ deleteNotebook } src={ Images.Delete } alt="Delete Note"></img>          
            </SettingHeaderRead>
            <ErrorMessages active={ deleteCounter !== 1 ? false : true }>
                { deleteCounter === 1 ? "Click the Delete Icon Again If You're Sure You Want To Delete This Notebook!" : null }
            </ErrorMessages>

            { home ? <Navigate to="/user-home" /> : null }
        </StyledSettingsFormRead>
    );
}
 
export default Settings;