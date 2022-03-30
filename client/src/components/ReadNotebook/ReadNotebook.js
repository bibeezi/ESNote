import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Notes from "./Notes";
import { ReadNotebookContent } from "../Common/Content.style";

const ReadNotebook = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes();
    }, []);

    useEffect(() => {
        showNotes(notes);
    }, [notes]);

    const getNotes = () => {

        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/note/getNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            res.data.msg !== "Notes Not Found" && setNotes(res.data);
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /getNotes", error);
        });
    };

    const showNotes = (notes) => {
        return notes.map((note) => (
            <Notes key={ note._id } note={ note } />
        ));
    };

    return (
        <div>
            <Header/>

            <ReadNotebookContent>
                { showNotes(notes) }
            </ReadNotebookContent>
        </div>
    );
}
 
export default ReadNotebook;