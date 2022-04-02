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

const Notebooks = ({ search, notes, sortBy, notebooks }) => {

    const [editNotebook, setEditNotebook] = useState(false);
    const [readNotebook, setReadNotebook] = useState(false);
    const [searchedNotebooks, setSearchedNotebooks] = useState([]);

    
    useEffect(() => {
        searchSortNotebooks();
    }, [notebooks, search, sortBy]);


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

    const searchSortNotebooks = () => {

        var filteredNotes = notes.filter((note) => 
            note.title.toLowerCase().search(search.toLowerCase()) !== -1 
            ||
            Object.values(note.body).some(val => val.content.toLowerCase().search(search.toLowerCase()) !== -1));

        var noteIDs = filteredNotes.map(note => note._id);

        var filteredNotebooks = notebooks.filter(notebook => 
            notebook.notes.some(val => noteIDs.includes(val)) 
            || 
            notebook.title.toLowerCase().search(search.toLowerCase()) !== -1);        
        
        switch(sortBy) {
            case "nameDESC":
                filteredNotebooks = filteredNotebooks.sort((notebook1, notebook2) => {
                    if(notebook1.title < notebook2.title) { return -1; }
                    if(notebook1.title > notebook2.title) { return 1; }
                    return 0;
                });
                break;
            case "dateDESC":
                filteredNotebooks = filteredNotebooks.sort((notebook1, notebook2) => {
                    if(notebook1.date < notebook2.date) { return -1; }
                    if(notebook1.date > notebook2.date) { return 1; }
                    return 0;
                });
                break;
            case "nameASC":
                filteredNotebooks = filteredNotebooks.sort((notebook1, notebook2) => {
                    if(notebook1.title < notebook2.title) { return 1; }
                    if(notebook1.title > notebook2.title) { return -1; }
                    return 0;
                });
                break;
            case "dateASC":
                filteredNotebooks = filteredNotebooks.sort((notebook1, notebook2) => {
                    if(notebook1.date < notebook2.date) { return 1; }
                    if(notebook1.date > notebook2.date) { return -1; }
                    return 0;
                });
                break;
            default:
                break;
        }
        
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