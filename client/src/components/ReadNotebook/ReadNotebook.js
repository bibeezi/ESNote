import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Notes from "./Notes";
import { ReadNotebookContent } from "../Common/Content.style";

const ReadNotebook = () => {

    const [notebook, setNotebook] = useState({});
    const [notes, setNotes] = useState([]);

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

    return (
        <div>
            <Header notebook={ notebook }/>

            <ReadNotebookContent>
                { showNotes(notes) }
            </ReadNotebookContent>
        </div>
    );
}
 
export default ReadNotebook;