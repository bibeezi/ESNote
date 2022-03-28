import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Note from "./Note";
import { TitleContainer } from "./EditNote.style";
import { EditNoteInput } from "../Common/Inputs.style";
import { EditNoteContent } from "../Common/Content.style";

const EditNote = () => {

    const [note, setNote] = useState({});
    const [template, setTemplate] = useState({});

    useEffect(() => {
        setTimeout(() => {
            getNote();
        }, 50);
    }, []);


    const getNote = () => {

        const payload = {
            noteID: localStorage.getItem("newNoteID")
        }

        axios.get('/note/getNote', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNote(res.data);

            getTemplate(res.data.template);
        })
        .catch((error) => {
            console.log("ERROR in EditNote - /getNote", error);
        });
    };

    const getTemplate = (templateID) => {

        const payload = {
            templateID: templateID
        }

        axios.get('/template/getTemplate', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setTemplate(res.data);
        })
        .catch((error) => {
            console.log("ERROR in EditNote - /getTemplate", error);
        });
    }

    return (
        <div>
            <Header />

            <EditNoteContent>
                <TitleContainer>
                    <label>Title:</label>
                    <EditNoteInput 
                        name="title"
                        type="text"
                        placeholder="Title"> 
                    </EditNoteInput>
                </TitleContainer>
                <Note
                    template={ template }
                    note={ note }>
                </Note>
            </EditNoteContent>
        </div>
    );
}
 
export default EditNote;