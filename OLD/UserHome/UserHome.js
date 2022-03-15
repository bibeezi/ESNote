
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Images from "../../../images/Images";

import { Header } from "../Common/Header.style";
import { Heading }  from "../Common/Heading.style";
import { Content } from "../Common/Content.style";
import { AddNote } from "./AddNote.style";

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
            <AddNote key={ index } onClick={ handleAddNoteClick }>
                <h1 className="note-title">{ note.title }</h1>
            </AddNote>
        ));
    };

    const handleAddNoteClick = () => {
        setNotePage(prevState => !prevState);
    }

    return ( 
        <div>
            <Header
                page={ "user" }>
                <div>
                    <img 
                        src={ Images.Home } 
                        alt="Home Icon">
                    </img>
                    <Heading>ESNote</Heading>
                </div>
                <div>
                    { username && <Heading>Welcome { username }!</Heading> }
                </div>
                <div id="icons">
                    {/* <img id="b"></img>
                    <img id="c"></img>
                    <img id="d"></img>
                    <img id="e"></img>
                    <img id="f"></img> */}
                </div>
            </Header>
            {/* <Header
                bottom={ "shadow" }>
                <div id="select-wrapper">
                    <select>
                        <option value="Name">Sort by Name</option>
                        <option value="Date">Sort by Date</option>
                    </select>
                </div>
                <div></div>
                <div>
                    <input>Search</input>>
                </div>
            </Header> */}

            <Content
            page={ "user" }>
                <div className="contents notebooks">
                    <h1>Notebooks</h1>
                    <div className="grid notebook-grid">
                        <AddNote onClick={ handleAddNoteClick }>
                            <img src={ Images.Plus } alt="" />
                        </AddNote>
                    </div>
                </div>
                <div className="contents notes">
                    <h1>Notes</h1>
                    <div className="grid note-grid">
                        <AddNote onClick={ handleAddNoteClick }>
                            <img src={ Images.Plus } alt="" />
                        </AddNote>
                        { notes.length && showNotes(notes) }
                    </div>
                </div>
                { notePage ? <Navigate to='/editNotes'/> : null }
            </Content>
        </div>
    );
}
 
export default UserHome;