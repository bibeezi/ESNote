import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import SearchSort from "./SearchSort";
import Notebooks from "./Notebooks";
import Notes from "./Notes";
import { UserHomeContent, SlideContent } from "../Common/Content.style";

const UserHome = () => {

    const [notebooks, setNotebooks] = useState([]);
    const [notes, setNotes] = useState([]);
    const [noteTemplates, setNoteTemplates] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {

        getNotebooks();
        getNotes();

    }, []);

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
            console.log("ERROR in UserHome - /notebook/getNotebooks", error);
        });
    };

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

            getTemplates(res.data);
        })
        .catch((error) => {
            console.log("ERROR in Notes - /getNotes", error);
        });
    };

    const getTemplates = (noteIDs) => {

        const payload = {
            userID: localStorage.getItem("userID"),
            noteIDs: noteIDs
        };

        axios.get('/template/getTemplates', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNoteTemplates(res.data);
        })
        .catch((error) => {
            console.log("ERROR in Notes - /getTemplates", error);
        });
    }

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setSearch(value);
    }

    return (
        <div>
            <Header />

            <UserHomeContent>
                <SearchSort handleChange={ handleChange }/>
                
                <SlideContent>
                    <Notebooks 
                        search={ search }
                        notebooks={ notebooks }
                    />
                    
                    <Notes 
                        search={ search }
                        notes={ notes }
                        noteTemplates={ noteTemplates }
                    />
                </SlideContent>
            </UserHomeContent>
        </div>
    );
}
 
export default UserHome;