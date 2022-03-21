import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotebooks, NotebooksGrid } from "./Notebooks.style";
import { Container, NoteShape } from "./Notes.style";
import { Title } from "../Common/Heading.style";

const Notebooks = () => {

    const username = localStorage.getItem("username");
    const [notebooks, setNotebooks] = useState([]);
    const [notebookPage, setNotebookPage] = useState(false);

    useEffect(() => {

        getNotebooks();

    }, []);

    const getNotebooks = () => {

        const payload = {
            userID: localStorage.getItem("userID")
        };

        axios.get('/notebooks/getNotebooks', {
            params: {
                data: payload
            }
        })
        .then((res) => {
            setNotebooks(res.data);
        })
        .catch((error) => {
            console.log("ERROR in UserHome - /notebooks/getNotebooks", error);
        });
    };

    const showNotebooks = (notebooks) => {
        return notebooks.map((notebook, index) => (
            <Container key={ index }>
                <NoteShape onClick={ handleAddNotebookClick }></NoteShape>
                <Title>{ notebook.title }</Title>
            </Container>
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
                <Container>
                    <NoteShape onClick={ handleAddNotebookClick }>
                        <img src={ Images.Plus } />
                    </NoteShape>
                    <Title>Add Notebook</Title>
                </Container>
                { notebooks.length && showNotebooks(notebooks) }
            </NotebooksGrid>
        </StyledNotebooks>
    );
}
 
export default Notebooks;