import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import { EditNoteContent } from "../Common/Content.style";

const EditNote = (  ) => {

    const [noteID, setNoteID] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNoteID(localStorage.getItem("newNoteID"))
        }, 1000)
    }, [])

    return (
        <div>
            <Header />

            <EditNoteContent>
                { noteID }
            </EditNoteContent>
        </div>
    );
}
 
export default EditNote;