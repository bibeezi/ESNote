import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Header from "./Header";
import SearchSort from "./SearchSort";
import Notebooks from "./Notebooks";
import Notes from "./Notes";
import { UserHomeContent, SlideContentUserHome } from "../Common/Content.style";

const UserHome = () => {

    const username = localStorage.getItem("username");
    const [notes, setNotes] = useState([]);
    const [notePage, setNotePage] = useState(false);

    useEffect(() => {

        getNotes();

    }, []);

    const getNotes = () => {

        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/getNotes', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNotes(res.data);
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /getNotes", error);
        });
    };

    const showNotes = (notes) => {
        return notes.map((note, index) => (
            <div key={ index } onClick={ handleAddNoteClick }>
                <h1 className="note-title">{ note.title }</h1>
            </div>
        ));
    };

    const handleAddNoteClick = () => {
        setNotePage(prevState => !prevState);
    }

    return (
        <div>
            <Header />

            <UserHomeContent>
                <SearchSort />
                
                <SlideContentUserHome>
                    <Notebooks />
                    
                    <Notes />
                </SlideContentUserHome>
            </UserHomeContent>
        </div>
    );
}
 
export default UserHome;