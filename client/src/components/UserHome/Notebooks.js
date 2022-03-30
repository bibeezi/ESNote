import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotebooks, NotebooksGrid } from "./Notebooks.style";
import { NoteContainer, NoteShape } from "./Notes.style";
import { Title } from "../Common/Heading.style";

const Notebooks = () => {

    const [notebooks, setNotebooks] = useState([]);
    const [notebookPage, setNotebookPage] = useState(false);

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
                <NoteShape onClick={ handleAddNotebookClick }></NoteShape>
                <Title>{ notebook.title }</Title>
            </NoteContainer>
        ));
    };

    const handleAddNotebookClick = () => {
        setNotebookPage(prevState => !prevState);
    }

    return (
        <StyledNotebooks>
            <SubheaderBar>
                <Subheading>Notebooks</Subheading>
            </SubheaderBar>

            <NotebooksGrid>
                <NoteContainer>
                    <NoteShape onClick={ handleAddNotebookClick }>
                        <img alt="click to add" src={ Images.Plus } />
                    </NoteShape>
                    <Title>Add Notebook</Title>
                </NoteContainer>
                { notebooks.length > 0 ? showNotebooks(notebooks) : null }
            </NotebooksGrid>

            { notebookPage ? <Navigate to='/create-notebook-template'/> : null }

        </StyledNotebooks>
    );
}
 
export default Notebooks;