import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from 'react-router-dom';

import Images from "../../images/Images";
import { SubheaderBar } from "../Common/Header.style";
import { Subheading } from "../Common/Heading.style";
import { StyledNotebooks, StyledGrid, StyledContainer, StyledShape } from "./UserHome.style";
import { UserHomeTitle } from "../Common/Heading.style";

import { TemplateUserHome } from "../Common/Template.style";
import { Strap, Bookmark } from "../Common/Section.style";

const Notebooks = ({ search, notebooks }) => {

    const [editNotebook, setEditNotebook] = useState(false);
    const [readNotebook, setReadNotebook] = useState(false);
    const [searchedNotebooks, setSearchedNotebooks] = useState([]);

    
    useEffect(() => {
        searchNotebooks();
    }, [notebooks, search]);


    const showNotebooks = (notebooks) => {
        return notebooks.map((notebook) => (
            <StyledContainer key={ notebook._id }>
                <TemplateUserHome 
                    id={ notebook._id }
                    colour={ notebook.colour } 
                    shape={ "notebook" }
                    onClick={ (e) => handleReadNotebook(e) } >
                    <Strap strap={ notebook.strap }></Strap>
                    <Bookmark bookmark={ notebook.bookmark }></Bookmark>
                </TemplateUserHome>
                
                <UserHomeTitle>{ notebook.title }</UserHomeTitle>
            </StyledContainer>
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

    const searchNotebooks = () => {
        var filteredNotebooks = notebooks.filter((notebook) => notebook.title.toLowerCase().search(search.toLowerCase()) !== -1);
        
        setSearchedNotebooks(filteredNotebooks);
    }

    return (
        <StyledNotebooks>
            <SubheaderBar>
                <Subheading>Notebooks</Subheading>
            </SubheaderBar>

            <StyledGrid>
                <StyledContainer>
                    <StyledShape onClick={ handleAddNotebook }>
                        <img alt="click to add" src={ Images.Plus } />
                    </StyledShape>
                    <UserHomeTitle>Add Notebook</UserHomeTitle>
                </StyledContainer>
                { notebooks.length > 0 ? showNotebooks(searchedNotebooks) : null }
            </StyledGrid>

            { editNotebook ? <Navigate to='/create-notebook-template'/> : null }
            { readNotebook ? <Navigate to='/read-notebook'/> : null }

        </StyledNotebooks>
    );
}
 
export default Notebooks;