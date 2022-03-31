import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotebooks, StyledGrid, NoteContainer, NoteShape } from "./UserHome.style";
import { UserHomeTitle } from "../Common/Heading.style";

const Notebooks = () => {

    const [notebooks, setNotebooks] = useState([]);
    const [editNotebook, setEditNotebook] = useState(false);
    const [readNotebook, setReadNotebook] = useState(false);

    useEffect(() => {

        getNotebooks();

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

    const showNotebooks = (notebooks) => {
        return notebooks.map((notebook) => (
            <NoteContainer key={ notebook._id }>
                <NoteShape id={ notebook._id } onClick={ (e) => handleReadNotebook(e) }></NoteShape>
                <UserHomeTitle>{ notebook.title }</UserHomeTitle>
            </NoteContainer>
        ));
    };

    const handleReadNotebook = ({ target }) => {

        const payload = {
            notebookID: target.id
        };

        axios.get('/notebook/getNotebook', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            res.data !== null ? localStorage.setItem("clickedNotebookID", res.data._id) : alert("Can't get this note!");

            setReadNotebook(prevState => !prevState);
        })
        .catch((error) => {
            console.log("ERROR in Notebooks - /getNotebook", error);
        });

    }

    const handleAddNotebook = () => {
        setEditNotebook(prevState => !prevState);
    }

    return (
        <StyledNotebooks>
            <SubheaderBar>
                <Subheading>Notebooks</Subheading>
            </SubheaderBar>

            <StyledGrid>
                <NoteContainer>
                    <NoteShape onClick={ handleAddNotebook }>
                        <img alt="click to add" src={ Images.Plus } />
                    </NoteShape>
                    <UserHomeTitle>Add Notebook</UserHomeTitle>
                </NoteContainer>
                { notebooks.length > 0 ? showNotebooks(notebooks) : null }
            </StyledGrid>

            { editNotebook ? <Navigate to='/create-notebook-template'/> : null }
            { readNotebook ? <Navigate to='/read-notebook'/> : null }

        </StyledNotebooks>
    );
}
 
export default Notebooks;